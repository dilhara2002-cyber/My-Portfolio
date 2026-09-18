import { ExternalLink, Book, Users, Star, AlertCircle } from 'lucide-react';
import { GithubIcon } from './ui/SocialIcons';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeader from './ui/SectionHeader';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { personalInfo } from '../data/portfolioData';

export default function GitHubActivity() {
  const { repos, user, loading, error } = useGitHubRepos(personalInfo.githubUsername);

  const topRepos = repos.filter((r) => !r.name.includes('cycber')).slice(0, 6);

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(13,20,39,0.5) 100%)' }}
    >
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader
            label="GitHub"
            title="GitHub Activity"
            subtitle="Explore my public repositories, experiments, and technical work on GitHub."
          />
        </AnimatedSection>

        {/* Error notice */}
        {error && (
          <AnimatedSection>
            <div className="glass-card p-4 mb-6 border border-amber-500/20 flex items-center gap-3 max-w-xl mx-auto">
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-amber-300/80">Could not load live GitHub data. {error}</p>
            </div>
          </AnimatedSection>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile card */}
          <AnimatedSection direction="left">
            <div className="glass-card p-6 flex flex-col gap-5">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                {user?.avatar_url ? (
                  <img
                    src={user.avatar_url}
                    alt={`${personalInfo.name}'s GitHub avatar`}
                    className="w-16 h-16 rounded-2xl border-2 border-blue-500/30"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center">
                    <GithubIcon className="w-8 h-8 text-blue-400" aria-hidden="true" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-white">{user?.name || personalInfo.name}</h3>
                  <p className="text-xs text-slate-500 font-mono">@{personalInfo.githubUsername}</p>
                </div>
              </div>

              {/* Bio */}
              {user?.bio && (
                <p className="text-sm text-slate-400 leading-relaxed">{user.bio}</p>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Book, label: 'Repos', value: loading ? '—' : String(user?.public_repos ?? repos.length) },
                  { icon: Users, label: 'Followers', value: loading ? '—' : String(user?.followers ?? 0) },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center p-3 rounded-xl bg-navy-700/40 border border-navy-500/30">
                    <Icon className="w-4 h-4 text-blue-400 mx-auto mb-1" aria-hidden="true" />
                    <p className="text-lg font-bold text-white font-mono">{value}</p>
                    <p className="text-xs text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              {/* GitHub stats image */}
              <div className="rounded-xl overflow-hidden border border-navy-500/30">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${personalInfo.githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&icon_color=06b6d4&text_color=94a3b8&bg_color=0d1427`}
                  alt="GitHub stats card"
                  className="w-full"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                aria-label="View GitHub profile"
              >
                <GithubIcon className="w-4 h-4" aria-hidden="true" />
                View GitHub Profile
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </AnimatedSection>

          {/* Top repos */}
          <AnimatedSection direction="right" delay={150} className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-mono font-semibold text-slate-400 uppercase tracking-widest">
                Recent Repositories
              </h3>

              {loading ? (
                <div className="flex flex-col gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="glass-card p-4 animate-pulse">
                      <div className="flex gap-3">
                        <div className="h-4 bg-navy-500/40 rounded w-2/3" />
                        <div className="h-4 bg-navy-500/30 rounded w-12 ml-auto" />
                      </div>
                      <div className="h-3 bg-navy-500/30 rounded w-full mt-2" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {topRepos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card-hover p-4 flex items-start gap-3 group"
                      aria-label={`View ${repo.name} repository on GitHub`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                        <Book className="w-4 h-4 text-blue-400" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-semibold text-white truncate group-hover:text-blue-300 transition-colors">
                            {repo.name.replace(/_/g, ' ').replace(/-/g, ' ')}
                          </h4>
                          <div className="flex items-center gap-2 flex-shrink-0 text-xs text-slate-600">
                            {repo.language && (
                              <span className="tag-dev text-xs">{repo.language}</span>
                            )}
                            <span className="flex items-center gap-0.5">
                              <Star className="w-3 h-3" aria-hidden="true" />
                              {repo.stargazers_count}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                          {repo.description || 'No description provided'}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {/* GitHub languages card */}
              <div className="rounded-xl overflow-hidden border border-navy-500/30 mt-2">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${personalInfo.githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=94a3b8&bg_color=0d1427`}
                  alt="Most used languages card"
                  className="w-full"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
