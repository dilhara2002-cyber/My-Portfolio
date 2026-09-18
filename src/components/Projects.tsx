import { useState } from 'react';
import { ExternalLink, Star, GitFork, Code, AlertCircle, Shield, BookOpen, Lock } from 'lucide-react';
import { GithubIcon } from './ui/SocialIcons';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeader from './ui/SectionHeader';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { personalInfo, projectCategories, projectEnrichment, staticProjects } from '../data/portfolioData';
import type { GitHubRepo } from '../types/github';

// ── Helpers for GitHub repos ───────────────────────────────
function getGHCategory(repo: GitHubRepo) {
  const enriched = projectEnrichment[repo.name];
  if (enriched) return enriched.category;
  const n = repo.name.toLowerCase();
  const d = (repo.description || '').toLowerCase();
  if (n.includes('security') || n.includes('cyber') || n.includes('password') || d.includes('security')) return 'cybersecurity';
  if (n.includes('network') || d.includes('network')) return 'networking';
  if (n.includes('system') || d.includes('management system')) return 'information-systems';
  return 'development';
}

function getGHTags(repo: GitHubRepo): string[] {
  const enriched = projectEnrichment[repo.name];
  if (enriched?.tags) return enriched.tags;
  const tags: string[] = [];
  if (repo.language) tags.push(repo.language);
  return tags;
}

const categoryIcon: Record<string, React.ReactNode> = {
  cybersecurity: <Shield className="w-4 h-4 text-blue-400" />,
  networking: <Code className="w-4 h-4 text-cyan-400" />,
  'information-systems': <BookOpen className="w-4 h-4 text-purple-400" />,
  development: <Code className="w-4 h-4 text-slate-400" />,
};

const categoryLabel: Record<string, string> = {
  cybersecurity: '🔐 Cybersecurity',
  networking: '🌐 Networking',
  'information-systems': '📊 Info Systems',
  development: '💻 Development',
};

const categoryTagClass: Record<string, string> = {
  cybersecurity: 'tag-cyber',
  networking: 'tag-net',
  'information-systems': 'tag-info',
  development: 'tag-dev',
};

function SkeletonCard() {
  return (
    <div className="glass-card p-5 animate-pulse">
      <div className="flex flex-col gap-3">
        <div className="h-4 bg-navy-500/40 rounded w-3/4" />
        <div className="h-3 bg-navy-500/30 rounded w-full" />
        <div className="h-3 bg-navy-500/30 rounded w-4/5" />
        <div className="flex gap-2 mt-2">
          <div className="h-5 bg-navy-500/30 rounded-full w-16" />
          <div className="h-5 bg-navy-500/30 rounded-full w-20" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { repos, loading, error } = useGitHubRepos(personalInfo.githubUsername);

  // Filter static CV projects
  const filteredStaticProjects = staticProjects.filter((p) =>
    activeFilter === 'all' || p.filterCategory === activeFilter
  );

  // Filter GitHub repos — exclude profile/readme repos
  const filteredGHRepos = repos
    .filter((r) => r.name !== 'dilhara2002-cycber')
    .filter((r) => activeFilter === 'all' || getGHCategory(r) === activeFilter);

  const totalShown = filteredStaticProjects.length + filteredGHRepos.length;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-padding relative">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader
            label="Projects"
            title="Projects & Experience"
            subtitle="Real cybersecurity projects, security assessments, and technical work — from academic coursework, hands-on labs, and practical real-world contributions."
          />
        </AnimatedSection>

        {/* Filter buttons */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap gap-2 justify-center mb-10" role="group" aria-label="Filter projects by category">
            {projectCategories.map((cat) => (
              <button
                key={cat.value}
                id={`filter-${cat.value}`}
                onClick={() => setActiveFilter(cat.value)}
                aria-pressed={activeFilter === cat.value}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                  activeFilter === cat.value
                    ? 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                    : 'text-slate-500 border-navy-500/30 hover:text-slate-300 hover:border-slate-600/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* API error notice */}
        {error && (
          <AnimatedSection>
            <div className="glass-card p-3 mb-6 border border-amber-500/20 flex items-center gap-3 max-w-xl mx-auto">
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
              <p className="text-xs text-amber-300/80">{error}</p>
            </div>
          </AnimatedSection>
        )}

        {/* ── Static CV Projects ── */}
        {filteredStaticProjects.length > 0 && (
          <>
            <AnimatedSection delay={80}>
              <div className="flex items-center gap-3 mb-5">
                <Lock className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <h3 className="text-sm font-mono font-semibold text-slate-400 uppercase tracking-widest">
                  Security Projects & Experience
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent" aria-hidden="true" />
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {filteredStaticProjects.map((project, i) => (
                <AnimatedSection key={project.id} delay={i * 80}>
                  <StaticProjectCard project={project} />
                </AnimatedSection>
              ))}
            </div>
          </>
        )}

        {/* ── GitHub Repos ── */}
        {(loading || filteredGHRepos.length > 0) && (
          <>
            <AnimatedSection delay={100}>
              <div className="flex items-center gap-3 mb-5">
                <GithubIcon className="w-4 h-4 text-slate-400" aria-hidden="true" />
                <h3 className="text-sm font-mono font-semibold text-slate-400 uppercase tracking-widest">
                  GitHub Repositories
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-500/20 to-transparent" aria-hidden="true" />
              </div>
            </AnimatedSection>

            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredGHRepos.map((repo, i) => (
                  <AnimatedSection key={repo.id} delay={i * 70}>
                    <GHRepoCard repo={repo} />
                  </AnimatedSection>
                ))}
              </div>
            )}
          </>
        )}

        {/* Empty state */}
        {!loading && totalShown === 0 && (
          <AnimatedSection>
            <div className="text-center py-16">
              <Code className="w-12 h-12 text-slate-700 mx-auto mb-4" aria-hidden="true" />
              <p className="text-slate-500 text-sm">No projects in this category.</p>
            </div>
          </AnimatedSection>
        )}

        {/* GitHub link */}
        {!loading && (
          <AnimatedSection delay={200}>
            <div className="text-center mt-10">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="View all repositories on GitHub"
              >
                <GithubIcon className="w-4 h-4" aria-hidden="true" />
                View All on GitHub
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}

// ── Static Project Card (from CV) ──────────────────────────
type StaticProject = typeof staticProjects[number];

function StaticProjectCard({ project }: { project: StaticProject }) {
  const tagClass = categoryTagClass[project.filterCategory] || 'tag-dev';

  return (
    <article className="glass-card-hover p-5 flex flex-col gap-4 h-full relative">
      {project.featured && (
        <div className="absolute top-3 right-3">
          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-400 border border-yellow-500/20 font-mono">
            Featured
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-1.5 pr-16">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
          <h3 className="font-semibold text-white text-sm leading-tight">
            {project.name}
          </h3>
        </div>
        <p className="text-xs text-slate-600 font-mono italic">{project.category}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        <span className={tagClass}>
          {categoryLabel[project.filterCategory] || '💻 Development'}
        </span>
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="tag-dev text-xs">{tag}</span>
        ))}
      </div>

      {/* Links */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="flex items-center gap-2 pt-2 border-t border-navy-500/30">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/5"
              aria-label={`View ${project.name} on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-blue-500/10"
              aria-label={`View live demo of ${project.name}`}
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

// ── GitHub Repo Card ────────────────────────────────────────
function GHRepoCard({ repo }: { repo: GitHubRepo }) {
  const category = getGHCategory(repo);
  const tags = getGHTags(repo);
  const tagClass = categoryTagClass[category] || 'tag-dev';

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  return (
    <article className="glass-card-hover p-5 flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          {categoryIcon[category]}
          <h3 className="font-semibold text-white text-sm leading-tight truncate">
            {repo.name.replace(/_/g, ' ').replace(/-/g, ' ')}
          </h3>
        </div>
        <p className="text-xs text-slate-600 font-mono">
          Updated {formatDate(repo.updated_at)}
          {repo.fork && <span className="ml-2 text-slate-700">(forked)</span>}
        </p>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed flex-1 line-clamp-3">
        {repo.description || 'View on GitHub for more details.'}
      </p>

      <div className="flex flex-wrap gap-1.5">
        <span className={tagClass}>{categoryLabel[category]}</span>
        {repo.language && <span className="tag-dev">{repo.language}</span>}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-navy-500/30">
        <div className="flex items-center gap-3 text-xs text-slate-600">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" aria-hidden="true" />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="w-3 h-3" aria-hidden="true" />
            {repo.forks_count}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/5"
            aria-label={`View ${repo.name} on GitHub`}
          >
            <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
            Code
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-blue-500/10"
              aria-label={`View live demo of ${repo.name}`}
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
