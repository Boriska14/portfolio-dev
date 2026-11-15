import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookMarked, GitBranch, RefreshCw, Star } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { RevealText } from './RevealText';

interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
}

const GITHUB_USERNAME = 'boriska-mbilongo';

function formatEventLabel(type: string): string {
  switch (type) {
    case 'PushEvent':
      return 'Mise à jour de code';
    case 'CreateEvent':
      return 'Création de dépôt ou branche';
    case 'PullRequestEvent':
      return 'Pull Request';
    case 'IssuesEvent':
      return 'Ticket / Issue';
    case 'WatchEvent':
      return 'Favori GitHub';
    case 'ForkEvent':
      return 'Fork de dépôt';
    default:
      return type.replace(/Event$/, '');
  }
}

function formatDateFr(iso: string): string {
  try {
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

export function GitHubActivitySection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [languageFilter, setLanguageFilter] = useState<string>('Tous');

  const fetchGitHubData = useCallback(async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const headers: HeadersInit = {
        Accept: 'application/vnd.github+json',
      };

      const [userRes, reposRes, eventsRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
        fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          { headers }
        ),
        fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=15`,
          { headers }
        ),
      ]);

      if (!userRes.ok || !reposRes.ok) {
        if (userRes.status === 403 || reposRes.status === 403) {
          throw new Error(
            'Limite de requêtes de l’API publique GitHub temporairement atteinte. Consultez le profil directement ou réessayez dans un instant.'
          );
        }
        throw new Error('Impossible de récupérer les statistiques GitHub pour le moment.');
      }

      const userData = (await userRes.json()) as GitHubUser;
      const reposData = (await reposRes.json()) as GitHubRepo[];
      const eventsData = eventsRes.ok ? ((await eventsRes.json()) as GitHubEvent[]) : [];

      setUser(userData);
      setRepos(Array.isArray(reposData) ? reposData : []);
      setEvents(Array.isArray(eventsData) ? eventsData : []);
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Impossible de charger les données publiques depuis GitHub.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchGitHubData();
  }, [fetchGitHubData]);

  const ownRepos = useMemo(() => repos.filter((r) => !r.fork), [repos]);

  const totalStars = useMemo(
    () => repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    [repos]
  );

  const languageStats = useMemo(() => {
    const counts = new Map<string, number>();
    ownRepos.forEach((repo) => {
      if (repo.language) {
        counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
      }
    });
    const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
    const total = sorted.reduce((acc, [, c]) => acc + c, 0);
    return sorted.slice(0, 5).map(([lang, count]) => ({
      lang,
      count,
      pct: total > 0 ? Math.round((count / total) * 100) : 0,
    }));
  }, [ownRepos]);

  const languageOptions = useMemo(
    () => ['Tous', ...languageStats.map((item) => item.lang)],
    [languageStats]
  );

  const highlightedRepos = useMemo(() => {
    const filtered =
      languageFilter === 'Tous'
        ? repos
        : repos.filter((repo) => repo.language === languageFilter);

    return [...filtered]
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      })
      .slice(0, 6);
  }, [repos, languageFilter]);

  return (
    <section id="github" className="bg-white py-20 lg:py-28 text-[#1c140f]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-[#1c140f]/10 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-[#c2410c]">Activité GitHub</p>
            <RevealText>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1c140f] sm:text-4xl">
                Dépôts et activité publique
              </h2>
            </RevealText>
            <p className="mt-3 text-sm leading-relaxed text-[#5d4d42]">
              Données chargées en direct depuis l’API publique GitHub ({GITHUB_USERNAME}).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={() => void fetchGitHubData()}
              disabled={loading}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-[#1c140f]/15 bg-[#eee6d8]/50 px-4 py-1.5 text-xs font-semibold text-[#1c140f] transition-colors hover:bg-[#eee6d8] disabled:opacity-50 whitespace-nowrap shrink-0"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`}
                aria-hidden="true"
              />
              Actualiser
            </button>
            <a
              href={user?.html_url || PROFILE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[#f97316] px-5 py-1.5 text-xs font-bold text-[#1c140f] transition-colors hover:bg-[#fb923c] whitespace-nowrap shrink-0"
            >
              Ouvrir GitHub
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {loading && (
          <div className="mt-10 space-y-6" aria-live="polite" aria-busy="true">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[1, 2, 3, 4].map((slot) => (
                <div key={slot} className="h-24 animate-pulse rounded-2xl bg-[#eee6d8]/70" />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((slot) => (
                <div key={slot} className="h-40 animate-pulse rounded-3xl bg-[#eee6d8]/70" />
              ))}
            </div>
          </div>
        )}

        {!loading && errorMsg && (
          <div
            role="status"
            className="mt-10 flex flex-col justify-between gap-4 rounded-3xl border border-[#1c140f]/10 bg-[#eee6d8]/55 p-6 sm:flex-row sm:items-center"
          >
            <div>
              <p className="text-sm font-bold text-[#1c140f]">
                Chargement API GitHub indisponible
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#5d4d42]">{errorMsg}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => void fetchGitHubData()}
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-[#1c140f]/15 bg-white px-4 py-1.5 text-xs font-semibold text-[#1c140f] hover:bg-[#e5e7e6]"
              >
                Réessayer
              </button>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full bg-[#f97316] px-4 py-1.5 text-xs font-bold text-[#1c140f] hover:bg-[#fb923c]"
              >
                Profil GitHub
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}

        {!loading && !errorMsg && user && (
          <div className="mt-10 space-y-10">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#f97316]/35 bg-[#eee6d8]/75 p-6">
                <p className="text-xs text-[#5d4d42]">Dépôts publics</p>
                <p className="mt-2 font-display text-3xl font-bold text-[#c2410c] tabular-nums">
                  {user.public_repos}
                </p>
              </div>
              <div className="rounded-2xl border border-[#1c140f]/8 bg-[#eee6d8]/50 p-6">
                <p className="text-xs text-[#5d4d42]">Langage principal</p>
                <p className="mt-2 font-display text-3xl font-bold text-[#1c140f]">
                  {languageStats[0]?.lang ?? 'Non défini'}
                </p>
              </div>
              <div className="rounded-2xl border border-[#1c140f]/8 bg-[#eee6d8]/50 p-6">
                <p className="text-xs text-[#5d4d42]">Étoiles reçues</p>
                <p className="mt-2 font-display text-3xl font-bold text-[#1c140f] tabular-nums">
                  {totalStars}
                </p>
              </div>
              <div className="rounded-2xl border border-[#1c140f]/8 bg-[#eee6d8]/50 p-6">
                <p className="text-xs text-[#5d4d42]">Événements récents</p>
                <p className="mt-2 font-display text-3xl font-bold text-[#1c140f] tabular-nums">
                  {events.length}
                </p>
              </div>
            </div>

            {languageStats.length > 0 && (
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#5d4d42]">
                  <span className="font-semibold text-[#1c140f]">Répartition :</span>
                  {languageStats.map((item) => (
                    <span key={item.lang} className="font-mono font-medium tabular-nums">
                      {item.lang} ({item.pct}%)
                    </span>
                  ))}
                </div>

                <div
                  role="tablist"
                  aria-label="Filtrer les dépôts par langage"
                  className="inline-flex flex-wrap items-center gap-1 rounded-full bg-[#e5e7e6]/75 p-1 self-start sm:self-auto"
                >
                  {languageOptions.map((lang) => {
                    const active = languageFilter === lang;
                    return (
                      <button
                        key={lang}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setLanguageFilter(lang)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                          active
                            ? 'bg-[#f97316] text-[#1c140f]'
                            : 'text-[#5d4d42] hover:text-[#1c140f]'
                        }`}
                      >
                        {lang}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {highlightedRepos.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {highlightedRepos.map((repo, idx) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.28, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex flex-col justify-between rounded-3xl border border-[#1c140f]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f97316]/50"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-[#5d4d42]">
                        <span className="inline-flex items-center gap-1.5 font-mono font-semibold text-[#c2410c]">
                          <BookMarked className="h-3.5 w-3.5" aria-hidden="true" />
                          {repo.language ?? 'Code'}
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 text-[#1c140f]/45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c2410c]"
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="mt-3 font-display text-base font-bold text-[#1c140f] group-hover:text-[#c2410c]">
                        {repo.name}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#5d4d42]">
                        {repo.description || 'Dépôt technique hébergé sur GitHub.'}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#e5e7e6] pt-3 font-mono text-[11px] text-[#5d4d42] tabular-nums">
                      <span className="inline-flex items-center gap-3">
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-3 w-3 text-[#f97316]" aria-hidden="true" />
                          {repo.stargazers_count}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <GitBranch className="h-3 w-3" aria-hidden="true" />
                          {repo.forks_count}
                        </span>
                      </span>
                      <span>Mis à jour : {formatDateFr(repo.updated_at)}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#5d4d42]">Aucun dépôt public trouvé pour ce filtre.</p>
            )}

            {events.length > 0 && (
              <div className="rounded-3xl border border-[#1c140f]/8 bg-[#e5e7e6]/45 p-6 sm:p-7">
                <h3 className="font-display text-base font-bold text-[#1c140f]">
                  Activité publique récente
                </h3>
                <ul className="mt-4 divide-y divide-[#1c140f]/10">
                  {events.slice(0, 5).map((ev) => (
                    <li
                      key={ev.id}
                      className="flex flex-col gap-1 py-3 text-xs sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="font-semibold text-[#1c140f]">
                        {formatEventLabel(ev.type)} ·{' '}
                        <span className="font-mono text-[#c2410c]">{ev.repo.name}</span>
                      </span>
                      <span className="font-mono text-[#5d4d42] tabular-nums">
                        {formatDateFr(ev.created_at)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
