
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase.js';

const DEFAULT_PROFILE_DATA = {
  fullName: 'Indraraj Singh Thakur',
  shortName: 'Indraraj',
  cardName: 'INDRARAJ THAKUR',
  level: '7',
  navClass: 'CODE ARCHITECT',
  cardClass: 'CODE ALCHEMIST',
  location: 'Rehli, Sagar, MP, India',
  shortLocation: 'Rehli, Sagar',
  educationShort: 'B.Tech CS • RGPV',
  college: 'Gyan Sagar College of Engineering, Sagar (RGPV, Bhopal)',
  degree: 'B.Tech in Computer Science & Engineering (2024 – 2028)',
  school: 'Swami Vivekanand School, Rehli (MP)',
  email: '',
  phone: '',
  phoneRaw: '',
  githubHandle: '@Indrajthakur',
  githubUrl: 'https://github.com/Indrajthakur',
  linkedinHandle: 'indraraj-thakurr-2a590a3b1',
  linkedinUrl: 'https://www.linkedin.com/in/indraraj-thakurr-2a590a3b1',
  livePortfolioUrl: 'https://indraraj-portfolio-j1n8.vercel.app',
  altPortfolioUrl: 'https://indraraj-portfolio.vercel.app',
  languages: 'English & Hindi',
  xp: 3420,
  maxXp: 5000,
  totalExperience: '7 months',
  projectsCount: '5+',
  internshipsCount: '0',
  internshipNote: 'Open to Internships // Summer 2027',
  githubStreak: '26 days',
  customAvatarUrl: '',
  heroBio: 'I build things that work — and I actually enjoy the parts everyone else skips.',
  currentMission:
    'Building modern web applications like Cravora and StudyFlow, levelling up my frontend & C++ OOP skills, and learning how to ship responsive sites with real-world features.',
};

const DEFAULT_SKILLS = [];
const DEFAULT_PROJECTS = [];
const DEFAULT_PLAYLIST = [];

const LONG_FIELDS = [
  'heroBio',
  'currentMission',
  'college',
  'degree',
  'school',
];

const inputClass =
  'w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-amber-500';

const ADMIN_DEFAULT_SKILLS = [
  { id: 'skill-1', name: 'Next.js', tier: 'GOLD', score: 95, desc: 'Server-side rendering & App Router', iconName: 'Zap' },
  { id: 'skill-2', name: 'JavaScript', tier: 'GOLD', score: 92, desc: 'Modern ES6+ & async web development', iconName: 'Code2' },
  { id: 'skill-3', name: 'React', tier: 'GOLD', score: 90, desc: 'Component-based UI architecture', iconName: 'Layers' },
  { id: 'skill-4', name: 'C++ & OOP', tier: 'GOLD', score: 88, desc: 'Classes, inheritance, polymorphism & STL', iconName: 'Cpu' },
  { id: 'skill-5', name: 'HTML5 & CSS3', tier: 'GOLD', score: 95, desc: 'Semantic markup & HUD animations', iconName: 'Globe' },
  { id: 'skill-6', name: 'Tailwind CSS', tier: 'GOLD', score: 94, desc: 'Utility-first responsive design framework', iconName: 'Layout' },
  { id: 'skill-7', name: 'Git & GitHub', tier: 'SILVER', score: 88, desc: 'Version control, rebasing & CI workflows', iconName: 'GitBranch' },
  { id: 'skill-8', name: 'Data Structures & Digital Systems', tier: 'SILVER', score: 84, desc: 'B.Tech CS core logic, algorithms & Node.js', iconName: 'Database' }
];

const emptySkill = () => ({
  id: crypto.randomUUID(),
  name: '',
  tier: 'BRONZE',
  score: 50,
  desc: '',
  iconName: 'code'
});

const ADMIN_DEFAULT_PROJECTS = [
  {
    id: 'proj-cravora',
    title: 'Cravora — Modern Food & Culinary Platform',
    category: 'WEB APPS',
    url: 'cravora-inky.vercel.app',
    liveLink: 'https://cravora-inky.vercel.app/',
    repoLink: 'https://github.com/Indrajthakur/Cravora.git',
    accent: 'from-orange-500/25 via-rose-500/10 to-slate-900',
    hudToast: 'PROJECT: CRAVORA (CRAVORA-INKY.VERCEL.APP)',
    desc: 'A sleek, responsive food discovery and ordering web application featuring interactive menu filtering, dynamic cart management, and smooth UI transitions deployed on Vercel.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    metrics: ['Live on Vercel', 'Interactive Cart & Menu', 'Responsive UI/UX'],
    previewType: 'cravora'
  },
  {
    id: 'proj-1',
    title: 'StudyFlow — Student Productivity Suite',
    category: 'WEB APPS',
    url: 'studyflow-indraraj.vercel.app',
    liveLink: 'https://github.com/Indrajthakur',
    repoLink: 'https://github.com/Indrajthakur',
    accent: 'from-amber-500/20 via-emerald-500/10 to-slate-900',
    hudToast: 'PROJECT: STUDYFLOW PRODUCTIVITY SUITE',
    desc: 'Full-stack academic planner, distraction-free study timer, and subject tracker tailored for B.Tech engineering coursework.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    metrics: ['Academic Planner', 'Focus Timer HUD', 'Subject Tracker'],
    previewType: 'analytics'
  },
  {
    id: 'proj-2',
    title: 'Task Manager App',
    category: 'WEB APPS',
    url: 'github.com/Indrajthakur/Task-manager-app',
    liveLink: 'https://github.com/Indrajthakur/Task-manager-app',
    repoLink: 'https://github.com/Indrajthakur/Task-manager-app',
    accent: 'from-cyan-500/20 via-blue-500/10 to-slate-900',
    hudToast: 'PROJECT: TASK MANAGER APP (GITHUB)',
    desc: 'Clean, responsive task and workflow management application with priority filtering, status tracking, and Git-backed version control.',
    tags: ['React', 'JavaScript', 'CSS3', 'LocalStorage', 'Git'],
    metrics: ['Priority Filtering', 'LocalStorage Sync', 'Responsive CRUD'],
    previewType: 'kanban'
  },
  {
    id: 'proj-3',
    title: 'System HUD Portfolio v3.0',
    category: 'UI/UX',
    url: 'indraraj-portfolio-j1n8.vercel.app',
    liveLink: 'https://indraraj-portfolio-j1n8.vercel.app',
    repoLink: 'https://github.com/Indrajthakur/indrajportfolio',
    accent: 'from-emerald-500/20 via-amber-500/10 to-slate-900',
    hudToast: 'PROJECT: SYSTEM HUD PORTFOLIO V3.0',
    desc: 'Gamified 8-bit RPG and Cyberpunk System HUD developer portfolio featuring dynamic context toasts, Web Audio synth player, and interactive skill deck.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Web Audio API'],
    metrics: ['Live on Vercel', 'Dual Theme HUD', '8-Bit Synth Audio'],
    previewType: 'hud'
  },
  {
    id: 'proj-4',
    title: 'C++ & OOP Systems Suite',
    category: 'C++ & SYSTEMS',
    url: 'github.com/Indrajthakur // cpp-oop-systems',
    liveLink: 'https://github.com/Indrajthakur',
    repoLink: 'https://github.com/Indrajthakur',
    accent: 'from-purple-500/20 via-indigo-500/10 to-slate-900',
    hudToast: 'PROJECT: C++ & OOP SYSTEMS SUITE',
    desc: 'Object-oriented C++ applications implementing custom classes, inheritance, polymorphism, file I/O streams, and memory management.',
    tags: ['C++', 'OOP', 'STL', 'Memory Management', 'CLI'],
    metrics: ['Class Hierarchies', 'File I/O Streams', 'Polymorphism'],
    previewType: 'terminal'
  }
];

const emptyProject = () => ({
  id: crypto.randomUUID(),
  title: '',
  category: 'WEB DEVELOPMENT',
  url: '',
  liveLink: '',
  repoLink: '',
  accent: 'cyan',
  hudToast: 'PROJECT UPDATED',
  desc: '',
  tags: [],
  metrics: [],
  previewType: 'website',
});

const ADMIN_DEFAULT_PLAYLIST = [
  {
    id: 'track-stream-1',
    title: 'Nightfall // Cyberpunk Coding Beats',
    artist: 'Lo-Fi Study Stream',
    platform: 'STREAM',
    url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
    cover: '🎧'
  },
  {
    id: 'track-stream-2',
    title: 'Synthwave Rehli Grid // Overdrive',
    artist: 'Neon Terminal',
    platform: 'STREAM',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=cyberpunk-2099-10701.mp3',
    cover: '⚡'
  },
  {
    id: 'track-spotify-1',
    title: 'Apocalypse',
    artist: 'Cigarettes After Sex (Spotify)',
    platform: 'SPOTIFY',
    url: 'https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX',
    embedUrl: 'https://open.spotify.com/embed/track/0yc6Gst2xkRu0eMLeRMGCX?utm_source=generator&theme=0',
    cover: '🟢'
  },
  {
    id: 'track-spotify-2',
    title: 'Coding Mode // Deep Focus Playlist',
    artist: 'Spotify Official Playlist',
    platform: 'SPOTIFY',
    url: 'https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j',
    embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j?utm_source=generator&theme=0',
    cover: '🟢'
  },
  {
    id: 'track-yt-1',
    title: 'Lofi Hip Hop Radio - Beats to Code/Study To',
    artist: 'Lofi Girl (YouTube Music)',
    platform: 'YOUTUBE',
    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    embedUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1',
    cover: '🔴'
  },
  {
    id: 'track-synth-1',
    title: '8-Bit Chiptune Arpeggio // Built-in Synth',
    artist: 'Indraraj WebAudio Engine',
    platform: 'SYNTH',
    notes: [261.63, 329.63, 392.0, 493.88, 392.0, 329.63],
    cover: '👾'
  }
];

const emptyPlaylistItem = () => ({
  id: crypto.randomUUID(),
  title: '',
  artist: '',
  platform: 'SPOTIFY',
  url: '',
  embedUrl: '',
  cover: '🟢',
});

const ADMIN_DEFAULT_QUESTS = [
  {
    id: 'quest-1',
    status: 'ACTIVE',
    xp: '+2000 XP',
    date: 'Nov 2026 - Present',
    title: 'Lead Creator & Full-Stack Developer — Cravora & StudyFlow',
    org: 'Self-Directed Engineering // GitHub (@Indrajthakur)',
    side: 'left',
    badgeText: 'CR',
    hudToast: 'QUEST: LEAD CREATOR @ CRAVORA & STUDYFLOW',
    bullets: [
      'Designed, built, and deployed Cravora (cravora-inky.vercel.app) — a modern, high-speed food ordering & culinary discovery web application.',
      'Architecting StudyFlow, a student productivity and academic workflow platform built with Next.js, React, and Tailwind CSS.',
      'Built the Task Manager App (github.com/Indrajthakur/Task-manager-app) and v3.0 8-Bit RPG System HUD Portfolio on Vercel.'
    ],
    tags: ['Cravora', 'Next.js', 'React', 'Tailwind CSS', 'Vercel']
  },
  {
    id: 'quest-2',
    status: 'ACTIVE',
    xp: '+1420 XP',
    date: '2024 - 2028',
    title: 'B.Tech in Computer Science & Engineering',
    org: 'Gyan Sagar College of Engineering (RGPV), Sagar, MP',
    side: 'right',
    badgeText: 'CS',
    hudToast: 'QUEST: B.TECH CS @ GYAN SAGAR COLLEGE (RGPV)',
    bullets: [
      'Mastering Object-Oriented Programming (OOP) in C++, Data Structures, Digital Systems, and Engineering Mathematics III.',
      'Building low-level C++ console and systems projects alongside modern full-stack JavaScript/TypeScript web architecture.',
      'Bridging theoretical computer science fundamentals with production deployment on Vercel and GitHub.'
    ],
    tags: ['C++', 'OOP', 'Digital Systems', 'Data Structures', 'RGPV']
  },
  {
    id: 'quest-3',
    status: 'COMPLETED',
    xp: '+800 XP',
    date: 'Completed 2024',
    title: 'High School Foundation (Science & Mathematics)',
    org: 'Swami Vivekanand School, Rehli, MP',
    side: 'left',
    badgeText: 'SV',
    hudToast: 'QUEST: SWAMI VIVEKANAND SCHOOL, REHLI',
    bullets: [
      'Completed higher secondary education in Rehli, Sagar with a strong foundation in Physics, Chemistry, and Mathematics.',
      'Began exploring PC software customization, game modding (GTA V vehicle & handling configs), and core programming concepts.'
    ],
    tags: ['Mathematics', 'Physics', 'PC Modding', 'Problem Solving']
  },
  {
    id: 'quest-4',
    status: 'UPCOMING',
    xp: '??? XP',
    date: 'Upcoming // 2027',
    title: 'Next Adventure — Software Engineering Internship',
    org: '@ Open to Opportunities (Remote / Hybrid / On-site)',
    side: 'right',
    isFuture: true,
    badgeText: '⚔️',
    hudToast: 'QUEST: SEEKING SOFTWARE ENGINEERING INTERNSHIP',
    bullets: [
      'Ready to contribute to high-impact frontend or full-stack engineering teams using React, Next.js, Node.js, and C++.',
      'Direct reach out: indrajthakur08@gmail.com | +91 8103113097'
    ],
    tags: ['Open to Internships', 'Full-Stack', 'Frontend', 'Loading...']
  }
];

const emptyQuest = () => ({
  id: crypto.randomUUID(),
  status: 'ACTIVE',
  xp: 100,
  date: '',
  title: '',
  org: '',
  side: 'left',
  badgeText: 'NEW QUEST',
  hudToast: 'QUEST UPDATED',
  bullets: [],
  tags: [],
});


function SectionHeading({ title, description }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold text-amber-400">{title}</h2>
      <p className="mt-1 text-sm text-slate-400">{description}</p>
    </div>
  );
}

export default function AdminDashboard() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [profile, setProfile] = useState(DEFAULT_PROFILE_DATA);
  const [skills, setSkills] = useState(DEFAULT_SKILLS);
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);
  const [playlist, setPlaylist] = useState(DEFAULT_PLAYLIST);
const [quests, setQuests] = useState([]);
  useEffect(() => {
    let active = true;

    async function loadDashboard() {
      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) throw authError;

        if (!user) {
          router.replace('/admin/login');
          return;
        }

        if (!active) return;

        setEmail(user.email || '');

        const { data, error } = await supabase
          .from('portfolio_content')
          .select('content')
          .eq('id', 'main')
          .single();

        if (error) throw error;

        const saved = data?.content || {};

        if (!active) return;

        setProfile({
          ...DEFAULT_PROFILE_DATA,
          ...(saved.profile || {}),
        });

const mergeItems = (defaultItems, savedItems) => {
  const items = new Map();

  [...defaultItems, ...savedItems].forEach((item, index) => {
    const key = item.id || `${item.title || item.name || 'item'}-${item.url || index}`;
    items.set(key, item);
  });

  return Array.from(items.values());
};

setSkills(mergeItems(
  ADMIN_DEFAULT_SKILLS,
  Array.isArray(saved.skills) ? saved.skills : []
));

setProjects(mergeItems(
  ADMIN_DEFAULT_PROJECTS,
  Array.isArray(saved.projects) ? saved.projects : []
));

setPlaylist(mergeItems(
  ADMIN_DEFAULT_PLAYLIST,
  Array.isArray(saved.playlist) ? saved.playlist : []
));

setQuests(mergeItems(
  ADMIN_DEFAULT_QUESTS,
  Array.isArray(saved.quests) ? saved.quests : []
));
      } catch (error) {
        console.error('Dashboard load error:', error);
        if (active) setMessage('Load failed: ' + error.message);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadDashboard();

    return () => {
      active = false;
    };
  }, [router]);

  const handleProfileChange = (key, value) => {
    setProfile((previous) => ({
      ...previous,
      [key]: ['xp', 'maxXp'].includes(key)
        ? value === '' ? '' : Number(value)
        : value,
    }));
  };

  const updateItem = (setter, index, key, value) => {
    setter((previous) =>
      previous.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      )
    );
  };

  const removeItem = (setter, index) => {
    setter((previous) => previous.filter((_, i) => i !== index));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (saving) return;

    setSaving(true);
    setMessage('');

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user) {
        router.replace('/admin/login');
        return;
      }

      const { data: currentData, error: readError } = await supabase
        .from('portfolio_content')
        .select('content')
        .eq('id', 'main')
        .single();

      if (readError) throw readError;

      const updatedContent = {
        ...(currentData?.content || {}),
        profile,
        skills,
        projects,
        playlist,
        quests,
      };

      const { data: savedData, error: saveError } = await supabase
        .from('portfolio_content')
        .update({
          content: updatedContent,
          updated_at: new Date().toISOString(),
        })
        .eq('id', 'main')
        .select('content')
        .single();

      if (saveError) throw saveError;

      if (!savedData?.content) {
        throw new Error('Could not verify saved portfolio data.');
      }

      setMessage('All portfolio changes saved successfully!');
      console.log('SAVED PORTFOLIO CONTENT:', savedData.content);
    } catch (error) {
      console.error('Portfolio save error:', error);
      setMessage('Save failed: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/admin/login');
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#070a0f] p-8 text-white">
        Loading dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070a0f] p-4 text-white sm:p-6">
      <div className="mx-auto max-w-5xl">

        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="mt-2 text-sm text-slate-400">
              Logged in as: {email}
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800"
          >
            Logout
          </button>
        </header>

        <form onSubmit={handleSave} className="space-y-8">

          {/* PROFILE */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-6">
            <SectionHeading
              title="Profile Management"
              description="Edit your personal and portfolio information."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {Object.entries(profile).map(([key, value]) => (
                <div
                  key={key}
                  className={LONG_FIELDS.includes(key) ? 'sm:col-span-2' : ''}
                >
                  <label className="mb-2 block text-sm text-slate-300">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                  </label>

                  {LONG_FIELDS.includes(key) ? (
                    <textarea
                      rows={4}
                      value={value ?? ''}
                      onChange={(e) => handleProfileChange(key, e.target.value)}
                      className={inputClass}
                    />
                  ) : (
                    <input
                      type={['xp', 'maxXp'].includes(key) ? 'number' : 'text'}
                      value={value ?? ''}
                      onChange={(e) => handleProfileChange(key, e.target.value)}
                      className={inputClass}
                    />
                  )}
                </div>
              ))}
            </div>
          </section>

{/* SKILLS */}
<section className="rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-6">
  <SectionHeading
    title="Skills Management"
    description="Manage your skills, proficiency scores, and skill tiers."
  />

  <div className="space-y-4">
    {skills.map((skill, index) => (
      <div
        key={skill.id || index}
        className="grid gap-3 rounded-xl border border-slate-700 p-4 sm:grid-cols-2"
      >
        <input
          placeholder="Skill name"
          value={skill.name || ''}
          onChange={(e) => updateItem(setSkills, index, 'name', e.target.value)}
          className={inputClass}
        />

        <select
          value={skill.tier || 'BRONZE'}
          onChange={(e) => updateItem(setSkills, index, 'tier', e.target.value)}
          className={inputClass}
        >
          <option value="GOLD">GOLD</option>
          <option value="SILVER">SILVER</option>
          <option value="BRONZE">BRONZE</option>
        </select>

        <input
          type="number"
          min="0"
          max="100"
          placeholder="Score (0–100)"
          value={skill.score ?? 50}
          onChange={(e) => updateItem(setSkills, index, 'score', Number(e.target.value))}
          className={inputClass}
        />

        <input
          placeholder="Icon name (e.g. code)"
          value={skill.iconName || ''}
          onChange={(e) => updateItem(setSkills, index, 'iconName', e.target.value)}
          className={inputClass}
        />

        <textarea
          placeholder="Skill description"
          value={skill.desc || ''}
          onChange={(e) => updateItem(setSkills, index, 'desc', e.target.value)}
          className={`${inputClass} sm:col-span-2`}
          rows={2}
        />

        <button
          type="button"
          onClick={() => removeItem(setSkills, index)}
          className="rounded-lg bg-red-600 px-3 py-2 font-bold sm:col-span-2"
        >
          Delete Skill
        </button>
      </div>
    ))}
  </div>

  <button
    type="button"
    onClick={() => setSkills((previous) => [...previous, emptySkill()])}
    className="mt-4 rounded-lg border border-amber-500 px-4 py-2 text-amber-400 hover:bg-amber-500 hover:text-black"
  >
    + Add Skill
  </button>
</section>

        
{/* PROJECTS */}
<section className="rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-6">
  <SectionHeading
    title="Projects Management"
    description="Manage your portfolio projects and their details."
  />

  <div className="space-y-5">
    {projects.map((project, index) => (
      <div
        key={project.id || index}
        className="space-y-3 rounded-xl border border-slate-700 p-4"
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-amber-300">
            Project {index + 1}
          </h3>
          <button
            type="button"
            onClick={() => removeItem(setProjects, index)}
            className="rounded-lg bg-red-600 px-3 py-2 text-sm font-bold"
          >
            Delete
          </button>
        </div>

        <input
          placeholder="Project title"
          value={project.title || ''}
          onChange={(e) => updateItem(setProjects, index, 'title', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="Category"
          value={project.category || ''}
          onChange={(e) => updateItem(setProjects, index, 'category', e.target.value)}
          className={inputClass}
        />

        <textarea
          placeholder="Project description"
          rows={3}
          value={project.desc || ''}
          onChange={(e) => updateItem(setProjects, index, 'desc', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="Project URL"
          value={project.url || ''}
          onChange={(e) => updateItem(setProjects, index, 'url', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="Live project URL"
          value={project.liveLink || ''}
          onChange={(e) => updateItem(setProjects, index, 'liveLink', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="GitHub repository URL"
          value={project.repoLink || ''}
          onChange={(e) => updateItem(setProjects, index, 'repoLink', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="Tags (comma separated)"
          value={Array.isArray(project.tags) ? project.tags.join(', ') : ''}
          onChange={(e) =>
            updateItem(
              setProjects,
              index,
              'tags',
              e.target.value.split(',').map((tag) => tag.trim()).filter(Boolean)
            )
          }
          className={inputClass}
        />

        <input
          placeholder="Metrics (comma separated)"
          value={Array.isArray(project.metrics) ? project.metrics.join(', ') : ''}
          onChange={(e) =>
            updateItem(
              setProjects,
              index,
              'metrics',
              e.target.value.split(',').map((metric) => metric.trim()).filter(Boolean)
            )
          }
          className={inputClass}
        />

        <input
          placeholder="Accent (e.g. cyan)"
          value={project.accent || ''}
          onChange={(e) => updateItem(setProjects, index, 'accent', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="HUD notification"
          value={project.hudToast || ''}
          onChange={(e) => updateItem(setProjects, index, 'hudToast', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="Preview type"
          value={project.previewType || ''}
          onChange={(e) => updateItem(setProjects, index, 'previewType', e.target.value)}
          className={inputClass}
        />
      </div>
    ))}
  </div>

  <button
    type="button"
    onClick={() => setProjects((previous) => [...previous, emptyProject()])}
    className="mt-4 rounded-lg border border-amber-500 px-4 py-2 text-amber-400 hover:bg-amber-500 hover:text-black"
  >
    + Add Project
  </button>
</section>


        
{/* PLAYLIST */}
<section className="rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-6">
  <SectionHeading
    title="Playlist Management"
    description="Manage Spotify, YouTube, audio streams, and synth tracks."
  />

  <div className="space-y-4">
    {playlist.map((item, index) => (
      <div
        key={item.id || index}
        className="space-y-3 rounded-xl border border-slate-700 p-4"
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-amber-300">
            Playlist Item {index + 1}
          </h3>

          <button
            type="button"
            onClick={() => removeItem(setPlaylist, index)}
            className="rounded-lg bg-red-600 px-3 py-2 text-sm font-bold"
          >
            Delete
          </button>
        </div>

        <input
          placeholder="Track title"
          value={item.title || ''}
          onChange={(e) => updateItem(setPlaylist, index, 'title', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="Artist"
          value={item.artist || ''}
          onChange={(e) => updateItem(setPlaylist, index, 'artist', e.target.value)}
          className={inputClass}
        />

        <select
          value={item.platform || 'SPOTIFY'}
          onChange={(e) => updateItem(setPlaylist, index, 'platform', e.target.value)}
          className={inputClass}
        >
          <option value="SPOTIFY">Spotify</option>
          <option value="YOUTUBE">YouTube</option>
          <option value="STREAM">Audio Stream</option>
          <option value="SYNTH">Built-in Synth</option>
        </select>

        <input
          placeholder="Track or playlist URL"
          value={item.url || ''}
          onChange={(e) => updateItem(setPlaylist, index, 'url', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="Embed URL (if applicable)"
          value={item.embedUrl || ''}
          onChange={(e) => updateItem(setPlaylist, index, 'embedUrl', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="Cover image URL or emoji"
          value={item.cover || ''}
          onChange={(e) => updateItem(setPlaylist, index, 'cover', e.target.value)}
          className={inputClass}
        />
      </div>
    ))}
  </div>

  <button
    type="button"
    onClick={() => setPlaylist((previous) => [...previous, emptyPlaylistItem()])}
    className="mt-4 rounded-lg border border-amber-500 px-4 py-2 text-amber-400 hover:bg-amber-500 hover:text-black"
  >
    + Add Playlist Item
  </button>
</section>


{/* QUESTS */}
<section className="rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-6">
  <SectionHeading
    title="Quests Management"
    description="Create and manage your portfolio missions and achievements."
  />

  <div className="space-y-5">
    {quests.map((quest, index) => (
      <div
        key={quest.id || index}
        className="space-y-3 rounded-xl border border-slate-700 p-4"
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-amber-300">
            Quest {index + 1}
          </h3>

          <button
            type="button"
            onClick={() => removeItem(setQuests, index)}
            className="rounded-lg bg-red-600 px-3 py-2 text-sm font-bold"
          >
            Delete
          </button>
        </div>

        <input
          placeholder="Quest title"
          value={quest.title || ''}
          onChange={(e) => updateItem(setQuests, index, 'title', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="Organization"
          value={quest.org || ''}
          onChange={(e) => updateItem(setQuests, index, 'org', e.target.value)}
          className={inputClass}
        />

        <select
          value={quest.status || 'ACTIVE'}
          onChange={(e) => updateItem(setQuests, index, 'status', e.target.value)}
          className={inputClass}
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="UPCOMING">UPCOMING</option>
        </select>

        <div className="grid gap-3 sm:grid-cols-2">
          <input
          
  type="text"
  placeholder="XP (e.g. +2000 XP or ??? XP)"
  value={quest.xp ?? ''}
  onChange={(e) => updateItem(setQuests, index, 'xp', e.target.value)}
  className={inputClass}
/>

          <input
            placeholder="Date"
            value={quest.date || ''}
            onChange={(e) => updateItem(setQuests, index, 'date', e.target.value)}
            className={inputClass}
          />
        </div>

        <input
          placeholder="Badge text"
          value={quest.badgeText || ''}
          onChange={(e) => updateItem(setQuests, index, 'badgeText', e.target.value)}
          className={inputClass}
        />

        <input
          placeholder="HUD notification"
          value={quest.hudToast || ''}
          onChange={(e) => updateItem(setQuests, index, 'hudToast', e.target.value)}
          className={inputClass}
        />

        <select
          value={quest.side || 'left'}
          onChange={(e) => updateItem(setQuests, index, 'side', e.target.value)}
          className={inputClass}
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>

        <textarea
          rows={3}
          placeholder="Quest bullet points (one per line)"
          value={Array.isArray(quest.bullets) ? quest.bullets.join('\n') : ''}
          onChange={(e) =>
            updateItem(
              setQuests,
              index,
              'bullets',
              e.target.value.split('\n').filter(Boolean)
            )
          }
          className={inputClass}
        />

        <input
          placeholder="Tags (comma separated)"
          value={Array.isArray(quest.tags) ? quest.tags.join(', ') : ''}
          onChange={(e) =>
            updateItem(
              setQuests,
              index,
              'tags',
              e.target.value.split(',').map((tag) => tag.trim()).filter(Boolean)
            )
          }
          className={inputClass}
        />
      </div>
    ))}
  </div>

  <button
    type="button"
    onClick={() => setQuests((previous) => [...previous, emptyQuest()])}
    className="mt-4 rounded-lg border border-amber-500 px-4 py-2 text-amber-400 hover:bg-amber-500 hover:text-black"
  >
    + Add Quest
  </button>
</section>


          {/* SAVE ALL */}
          <section className="rounded-2xl border border-amber-500/40 bg-slate-900 p-5">
            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-lg bg-amber-500 px-5 py-4 font-bold text-black hover:bg-amber-400 disabled:opacity-50"
            >
              {saving ? 'Saving All Changes...' : 'Save All Portfolio Changes'}
            </button>

            {message && (
              <p className="mt-4 rounded-lg bg-slate-800 p-3 text-sm text-amber-300">
                {message}
              </p>
            )}
          </section>

        </form>
      </div>
    </main>
  );
}
