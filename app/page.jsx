"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
    Terminal,
    Zap,
    MapPin,
    GraduationCap,
    Download,
    ExternalLink,
    Github,
    Linkedin,
    Mail,
    Play,
    Pause,
    SkipForward,
    Volume2,
    VolumeX,
    Award,
    Code2,
    Cpu,
    Globe,
    Layers,
    GitBranch,
    Database,
    Layout,
    Sparkles,
    CheckCircle2,
    Rocket,
    FolderGit2,
    Sword,
    Shield,
    Trophy,
    Flame,
    BookOpen,
    User,
    Briefcase,
    FileCode,
    Sun,
    Eye,
    X,
    ChevronRight,
    Coffee,
    Instagram,
    Activity
} from 'lucide-react';

// ============================================================================
// DEFAULT VERIFIED PROFILE DATA (INDRARAJ SINGH THAKUR)
// ============================================================================
const DEFAULT_SKILLS_DATA = [
    {
        id: 'skill-1',
        name: 'Next.js',
        tier: 'GOLD',
        score: 95,
        desc: 'Server-side rendering & App Router',
        iconName: 'Zap'
    },
    {
        id: 'skill-2',
        name: 'JavaScript',
        tier: 'GOLD',
        score: 92,
        desc: 'Modern ES6+ & async web development',
        iconName: 'Code2'
    },
    {
        id: 'skill-3',
        name: 'React',
        tier: 'GOLD',
        score: 90,
        desc: 'Component-based UI architecture',
        iconName: 'Layers'
    },
    {
        id: 'skill-4',
        name: 'C++ & OOP',
        tier: 'GOLD',
        score: 88,
        desc: 'Classes, inheritance, polymorphism & STL',
        iconName: 'Cpu'
    },
    {
        id: 'skill-5',
        name: 'HTML5 & CSS3',
        tier: 'GOLD',
        score: 95,
        desc: 'Semantic markup & HUD animations',
        iconName: 'Globe'
    },
    {
        id: 'skill-6',
        name: 'Tailwind CSS',
        tier: 'GOLD',
        score: 94,
        desc: 'Utility-first responsive design framework',
        iconName: 'Layout'
    },
    {
        id: 'skill-7',
        name: 'Git & GitHub',
        tier: 'SILVER',
        score: 88,
        desc: 'Version control, rebasing & CI workflows',
        iconName: 'GitBranch'
    },
    {
        id: 'skill-8',
        name: 'Data Structures & Digital Systems',
        tier: 'SILVER',
        score: 84,
        desc: 'B.Tech CS core logic, algorithms & Node.js',
        iconName: 'Database'
    }
];

const SKILL_ICON_MAP = {
    Zap,
    Code2,
    Layers,
    Cpu,
    Globe,
    Layout,
    GitBranch,
    Database,
    Terminal,
    Rocket,
    Shield,
    Sparkles
};

// ============================================================================
// DEFAULT QUESTS ("THE GRIND") & FEATURED PROJECTS DATA
// ============================================================================
const DEFAULT_QUESTS_DATA = [
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

const DEFAULT_PROJECTS_DATA = [
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

// ============================================================================
// DEFAULT MULTI-PLATFORM MUSIC & PLAYLIST DATA (SPOTIFY / STREAM / YOUTUBE / 8-BIT)
// ============================================================================
const DEFAULT_PLAYLIST_DATA = [
    {
        id: 'track-stream-1',
        title: 'Nightfall // Cyberpunk Coding Beats',
        artist: 'Lo-Fi Study Stream',
        platform: 'STREAM', // Direct HTML5 Audio MP3 Stream
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

// Helper to parse any Spotify, YouTube, SoundCloud, or MP3 link into playable embed format
function parseMusicLink(rawUrl) {
    const url = rawUrl.trim();
    if (!url) return { platform: 'STREAM', embedUrl: '' };

    // 1. Spotify Track / Playlist / Album / Artist
    if (url.includes('spotify.com')) {
        const cleanUrl = url.split('?')[0];
        const match = cleanUrl.match(/open\.spotify\.com\/(track|playlist|album|artist|episode)\/([a-zA-Z0-9]+)/);
        if (match) {
            const [, type, id] = match;
            return {
                platform: 'SPOTIFY',
                embedUrl: `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`,
                cover: '🟢'
            };
        }
    }

    // 2. YouTube or YouTube Music Video / Playlist
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const listMatch = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
        const videoMatch =
            url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
        if (listMatch && !videoMatch) {
            return {
                platform: 'YOUTUBE',
                embedUrl: `https://www.youtube.com/embed/videoseries?list=${listMatch[1]}&autoplay=1`,
                cover: '🔴'
            };
        }
        if (videoMatch) {
            return {
                platform: 'YOUTUBE',
                embedUrl: `https://www.youtube.com/embed/${videoMatch[1]}?autoplay=1`,
                cover: '🔴'
            };
        }
    }

    // 3. SoundCloud Track or Playlist
    if (url.includes('soundcloud.com')) {
        return {
            platform: 'SOUNDCLOUD',
            embedUrl: `https://w.soundcloud.com/player/?url=${encodeURIComponent(
                url
            )}&color=%23f59e0b&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
            cover: '🟠'
        };
    }

    // 4. Direct MP3 / WAV / OGG Stream
    return {
        platform: 'STREAM',
        embedUrl: url,
        cover: '🎧'
    };
}

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
    email: 'indrajthakur08@gmail.com',
    phone: '+91 8103113097',
    phoneRaw: '+918103113097',
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
        'Building modern web applications like Cravora and StudyFlow, levelling up my frontend & C++ OOP skills, and learning how to ship responsive sites with real-world features.'
};

// ============================================================================
// CUSTOM ILLUSTRATED PROFILE AVATAR (MATCHES UPLOADED PORTRAIT IMAGE 2)
// ============================================================================

const IndrarajProfileAvatar = ({ customUrl, sizeClass = 'w-16 h-16 sm:w-20 sm:h-20', isGold }) => {
    const borderClass = isGold
        ? 'border-amber-400/70 shadow-[0_0_18px_rgba(245,158,11,0.3)]'
        : 'border-emerald-400/70 shadow-[0_0_18px_rgba(34,197,94,0.3)]';

    if (customUrl) {
        return (
            <div
                className={`${sizeClass} rounded-full overflow-hidden border-2 ${borderClass} bg-[#070a0f] shrink-0 select-none`}
            >
                <img
                    src={customUrl}
                    alt="Indraraj Singh Thakur"
                    className="w-full h-full object-cover"
                />
            </div>
        );
    }

    return (
        <div
            className={`${sizeClass} rounded-full overflow-hidden border-2 ${borderClass} bg-[#05070b] shrink-0 select-none relative`}
        >
            <svg
                viewBox="0 0 240 240"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Sky-Blue Circular Gradient Backdrop */}
                    <radialGradient id="skyBackdrop" cx="50%" cy="45%" r="55%">
                        <stop offset="0%" stopColor="#bce3fa" />
                        <stop offset="65%" stopColor="#82c8f0" />
                        <stop offset="100%" stopColor="#5bb0e5" />
                    </radialGradient>
                    {/* Warm Skin Gradient */}
                    <linearGradient id="skinTone" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ffdfc4" />
                        <stop offset="55%" stopColor="#f9c6a2" />
                        <stop offset="100%" stopColor="#eab088" />
                    </linearGradient>
                    {/* Neck Shadow Gradient */}
                    <linearGradient id="neckTone" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#e29e76" />
                        <stop offset="40%" stopColor="#f5be99" />
                        <stop offset="100%" stopColor="#f9c9a8" />
                    </linearGradient>
                    {/* Dark Plum/Charcoal Collared Shirt */}
                    <linearGradient id="shirtTone" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3c2d3d" />
                        <stop offset="50%" stopColor="#2a1f2b" />
                        <stop offset="100%" stopColor="#1b131c" />
                    </linearGradient>
                    <clipPath id="avatarCircleClip">
                        <circle cx="120" cy="120" r="112" />
                    </clipPath>
                </defs>

                {/* Outer Dark Frame */}
                <rect width="240" height="240" fill="#04060a" />

                <g clipPath="url(#avatarCircleClip)">
                    {/* Sky Blue Circle Background */}
                    <circle cx="120" cy="120" r="112" fill="url(#skyBackdrop)" />

                    {/* Neck & Collarbone */}
                    <path
                        d="M90 148 L90 218 L150 218 L150 148 Z"
                        fill="url(#neckTone)"
                    />
                    {/* Subtle Jaw/Neck Shadow */}
                    <path
                        d="M90 152 Q120 174 150 152 L150 165 Q120 184 90 165 Z"
                        fill="#d48b64"
                        opacity="0.55"
                    />
                    {/* Neck Tendon Highlights */}
                    <path
                        d="M102 172 Q112 200 116 215"
                        stroke="#d48b64"
                        strokeWidth="2.5"
                        fill="none"
                        opacity="0.5"
                    />
                    <path
                        d="M138 172 Q128 200 124 215"
                        stroke="#d48b64"
                        strokeWidth="2.5"
                        fill="none"
                        opacity="0.5"
                    />

                    {/* Shoulders & Dark Collared Shirt */}
                    <path
                        d="M22 238 C32 198 62 178 88 170 L108 238 Z"
                        fill="url(#shirtTone)"
                        stroke="#140e15"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M218 238 C208 198 178 178 152 170 L132 238 Z"
                        fill="url(#shirtTone)"
                        stroke="#140e15"
                        strokeWidth="2.5"
                    />
                    {/* Inner White Undershirt Edge */}
                    <path
                        d="M91 188 L108 238 L103 238 L88 192 Z"
                        fill="#e2e8f0"
                    />
                    {/* Left Shirt Collar Flap */}
                    <path
                        d="M88 164 L66 198 L91 192 L106 238 L92 172 Z"
                        fill="#473648"
                        stroke="#140e15"
                        strokeWidth="2.2"
                    />
                    {/* Right Shirt Collar Flap with Button */}
                    <path
                        d="M152 164 L174 198 L146 196 L130 238 L148 172 Z"
                        fill="#473648"
                        stroke="#140e15"
                        strokeWidth="2.2"
                    />
                    <circle
                        cx="144"
                        cy="198"
                        r="3.2"
                        fill="#6e5a70"
                        stroke="#140e15"
                        strokeWidth="1.2"
                    />

                    {/* Ears */}
                    <path
                        d="M73 102 C63 98 61 118 68 128 C71 132 76 131 78 127 Z"
                        fill="url(#skinTone)"
                        stroke="#1c1311"
                        strokeWidth="2.2"
                    />
                    <path
                        d="M167 104 C177 100 179 120 172 130 C169 134 164 133 162 129 Z"
                        fill="url(#skinTone)"
                        stroke="#1c1311"
                        strokeWidth="2.2"
                    />
                    {/* Inner Ear Detail */}
                    <path
                        d="M68 109 Q73 115 71 122"
                        stroke="#c97d5b"
                        strokeWidth="2"
                        fill="none"
                    />
                    <path
                        d="M172 111 Q167 117 169 124"
                        stroke="#c97d5b"
                        strokeWidth="2"
                        fill="none"
                    />

                    {/* Head / Jawline Contour */}
                    <path
                        d="M76 74 C74 106 76 132 88 148 C100 163 111 167 120 167 C129 167 140 163 152 148 C164 132 166 106 164 74 Z"
                        fill="url(#skinTone)"
                        stroke="#18110f"
                        strokeWidth="2.5"
                    />

                    {/* Subtle Warm Cheek Blush */}
                    <ellipse cx="92" cy="118" rx="14" ry="8" fill="#f4978e" opacity="0.32" />
                    <ellipse cx="148" cy="118" rx="14" ry="8" fill="#f4978e" opacity="0.32" />

                    {/* Expressive Dark Eyebrows */}
                    <path
                        d="M84 91 Q98 83 111 90"
                        stroke="#1a1311"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        fill="none"
                    />
                    <path
                        d="M129 91 Q142 84 156 93"
                        stroke="#1a1311"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* Left Eye */}
                    <path
                        d="M87 101 Q98 95 109 102 Q98 106 87 101 Z"
                        fill="#ffffff"
                        stroke="#18110f"
                        strokeWidth="2"
                    />
                    <circle cx="98" cy="100" r="4.2" fill="#3b231e" />
                    <circle cx="98" cy="100" r="2" fill="#120a08" />
                    <circle cx="96.5" cy="98.5" r="1.2" fill="#ffffff" />

                    {/* Right Eye */}
                    <path
                        d="M131 102 Q142 96 153 103 Q142 107 131 102 Z"
                        fill="#ffffff"
                        stroke="#18110f"
                        strokeWidth="2"
                    />
                    <circle cx="142" cy="101" r="4.2" fill="#3b231e" />
                    <circle cx="142" cy="101" r="2" fill="#120a08" />
                    <circle cx="140.5" cy="99.5" r="1.2" fill="#ffffff" />

                    {/* Nose Bridge & Tip */}
                    <path
                        d="M119 96 L115 116 Q113 123 120 124 Q127 123 125 116"
                        fill="#f2b28d"
                        opacity="0.55"
                    />
                    <path
                        d="M113 120 Q120 126 128 120"
                        stroke="#b56b49"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* Bright Confident Smile */}
                    <path
                        d="M98 133 Q120 137 142 135 Q134 149 120 148 Q105 147 98 133 Z"
                        fill="#d97f76"
                        stroke="#1c1210"
                        strokeWidth="1.8"
                    />
                    {/* Teeth */}
                    <path
                        d="M101 134 Q120 138 139 136 Q133 144 120 143 Q107 143 101 134 Z"
                        fill="#ffffff"
                    />
                    {/* Lower Lip Highlight */}
                    <path
                        d="M107 147 Q120 152 133 147"
                        stroke="#e08b82"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                    />
                    {/* Smile Dimple Lines */}
                    <path
                        d="M94 128 Q91 133 94 138"
                        stroke="#c57b59"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        fill="none"
                    />
                    <path
                        d="M145 130 Q148 135 145 140"
                        stroke="#c57b59"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* Voluminous Curly Messy Dark Hair (Matches Image 2) */}
                    <path
                        d="M74 106
               C64 94 62 74 71 62
               C66 50 76 38 89 44
               C91 29 105 22 115 34
               C122 20 138 22 141 36
               C155 28 168 38 163 52
               C177 50 184 67 174 79
               C182 88 176 102 165 106
               C166 92 162 79 154 74
               C148 83 136 82 132 74
               C125 84 111 84 105 73
               C96 83 84 80 79 75
               C75 84 75 96 74 106 Z"
                        fill="#1b1514"
                        stroke="#0d0908"
                        strokeWidth="2.4"
                        strokeLinejoin="round"
                    />
                    {/* Curly Hair Highlights / Strands */}
                    <path
                        d="M84 56 Q96 45 106 58"
                        stroke="#332826"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                    />
                    <path
                        d="M114 44 Q128 36 137 52"
                        stroke="#332826"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                    />
                    <path
                        d="M142 56 Q156 50 161 66"
                        stroke="#332826"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                    />
                    <path
                        d="M95 68 Q106 60 115 72"
                        stroke="#2c2220"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                    />
                </g>

                {/* Subtle Inner Ring Border */}
                <circle
                    cx="120"
                    cy="120"
                    r="112"
                    fill="none"
                    stroke="#ffffff"
                    strokeOpacity="0.18"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
};

// ============================================================================
// MAIN PORTFOLIO APPLICATION
// ============================================================================

export default function App() {
    // Theme Mode: 'emerald' (Indraraj's original Neon Green/Cyan HUD) or 'gold' (Reference Gold RPG HUD)
    const [theme, setTheme] = useState('emerald');
    const isGold = theme === 'gold';

    // Verified Profile State (Persisted in localStorage so Indraraj can live-edit)
    const [profile, setProfile] = useState(DEFAULT_PROFILE_DATA);
    // Live Customizer Drawer State
    const [showConfigDrawer, setShowConfigDrawer] = useState(false);
    const [copiedJson, setCopiedJson] = useState(false);

    // Dynamic Skill Deck State (Persisted in localStorage so Indraraj can add/edit/delete anytime)
    const [skills, setSkills] = useState(DEFAULT_SKILLS_DATA);
   

const [showSkillModal, setShowSkillModal] = useState(false);
const [editingSkillId, setEditingSkillId] = useState(null);
const [skillForm, setSkillForm] = useState({
    name: '',
    tier: 'GOLD',
    score: 90,
    desc: '',
    iconName: 'Zap'
});

const saveSkillsToStorage = (updatedList) => {
    setSkills(updatedList);
    try {
        localStorage.setItem('indraraj_hud_skills_v3', JSON.stringify(updatedList));
    } catch (e) {
        // Ignore storage quota errors
    }
};

const openAddSkillModal = () => {
    setEditingSkillId(null);
    setSkillForm({
        name: '',
        tier: 'GOLD',
        score: 90,
        desc: '',
        iconName: 'Zap'
    });
    setShowSkillModal(true);
    setHudContext('SKILL_DECK: EQUIP NEW SKILL CARD');
};

const openEditSkillModal = (skill) => {
    setEditingSkillId(skill.id);
    setSkillForm({
        name: skill.name,
        tier: skill.tier,
        score: skill.score,
        desc: skill.desc,
        iconName: skill.iconName || 'Zap'
    });
    setShowSkillModal(true);
    setHudContext(`SKILL_DECK: EDITING ${skill.name.toUpperCase()}`);
};

const handleSaveSkill = (e) => {
    e.preventDefault();
    if (!skillForm.name.trim()) return;
    const clampedScore = Math.max(5, Math.min(100, Number(skillForm.score) || 85));

    if (editingSkillId) {
        const updated = skills.map((s) =>
            s.id === editingSkillId
                ? { ...s, ...skillForm, score: clampedScore }
                : s
        );
        saveSkillsToStorage(updated);
        setHudContext(`SKILL UPDATED: ${skillForm.name.toUpperCase()} (${clampedScore}/100)`);
    } else {
        const newSkill = {
            id: `skill-${Date.now()}`,
            name: skillForm.name.trim(),
            tier: skillForm.tier,
            score: clampedScore,
            desc: skillForm.desc.trim() || 'Equipped custom developer skill',
            iconName: skillForm.iconName || 'Zap'
        };
        saveSkillsToStorage([...skills, newSkill]);
        updateProfileField('xp', Math.min(profile.maxXp, xp + 120));
        setHudContext(`NEW SKILL EQUIPPED: ${newSkill.name.toUpperCase()} (+120 XP)`);
    }
    setShowSkillModal(false);
};

const handleDeleteSkill = (id, name) => {
    const updated = skills.filter((s) => s.id !== id);
    saveSkillsToStorage(updated);
    setHudContext(`SKILL UNEQUIPPED: ${name.toUpperCase()}`);
    if (editingSkillId === id) {
        setShowSkillModal(false);
    }
};

const handleResetSkills = () => {
    saveSkillsToStorage(DEFAULT_SKILLS_DATA);
    setHudContext('SKILL_DECK: RESTORED DEFAULT 8 SKILLS');
};

// Safe Clipboard Copy with Fallback for Sandboxed Iframes
const handleExportJson = async () => {
    const jsonString = JSON.stringify(profile, null, 2);
    let copied = false;

    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(jsonString);
            copied = true;
        }
    } catch (err) {
        copied = false;
    }

    if (!copied) {
        try {
            const textArea = document.createElement('textarea');
            textArea.value = jsonString;
            textArea.style.position = 'fixed';
            textArea.style.left = '-9999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            copied = document.execCommand('copy');
            document.body.removeChild(textArea);
        } catch (fallbackErr) {
            // Fallback to downloading JSON file if copy is completely restricted
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'indraraj-hud-profile.json';
            a.click();
            URL.revokeObjectURL(url);
            copied = true;
        }
    }

    if (copied) {
        setCopiedJson(true);
        setHudContext('CONFIG: EXPORTED PROFILE JSON');
        setTimeout(() => setCopiedJson(false), 2500);
    }
};

const updateProfileField = (key, value) => {
    setProfile((prev) => {
        const updated = { ...prev, [key]: value };
        try {
            localStorage.setItem('indraraj_hud_profile_v3', JSON.stringify(updated));
        } catch (e) {
            // Ignore storage errors
        }
        return updated;
    });
};

// Handle Custom Avatar File Upload (Converts uploaded PNG/JPG to Base64 in localStorage)
const handleAvatarFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        if (typeof reader.result === 'string') {
            updateProfileField('customAvatarUrl', reader.result);
            setHudContext('PROFILE: CUSTOM AVATAR IMAGE EQUIPPED');
        }
    };
    reader.readAsDataURL(file);
};

const resetProfileData = () => {
    setProfile(DEFAULT_PROFILE_DATA);
    try {
        localStorage.removeItem('indraraj_hud_profile_v3');
    } catch (e) {
        // Ignore
    }
    setHudContext('SYSTEM: RESTORED VERIFIED DEFAULT STATS');
};

// Dynamic Navbar Context Toast Pill (Updates on hover or section focus)
const [hudContext, setHudContext] = useState('SYSTEM: PORTFOLIO_V3.0 READY');
const [showHudBubble, setShowHudBubble] = useState(false);
const hudTimeoutRef = useRef(null);
const [activeNav, setActiveNav] = useState('HOME');

// Systematic HUD Notification Trigger (Auto-hides cleanly after 3.2s so navbar never gets cluttered)
const triggerHudToast = (msg) => {
    setHudContext(msg);
    setShowHudBubble(true);
    if (hudTimeoutRef.current) clearTimeout(hudTimeoutRef.current);
    hudTimeoutRef.current = setTimeout(() => {
        setShowHudBubble(false);
    }, 3200);
};

// Format any HUD message into a clean { category, detail } pair
const parsedHud = useMemo(() => {
    const raw = hudContext || 'SYSTEM: READY';
    const parts = raw.split(':');
    if (parts.length > 1) {
        return {
            category: parts[0].trim(),
            detail: parts.slice(1).join(':').trim()
        };
    }
    return { category: 'HUD', detail: raw };
}, [hudContext]);

// ============================================================================
// MULTI-PLATFORM MUSIC & PLAYLIST SYSTEM
// ============================================================================
const [playlist, setPlaylist] = useState(DEFAULT_PLAYLIST_DATA);
   
const [trackIndex, setTrackIndex] = useState(0);
const [isPlaying, setIsPlaying] = useState(false);
const [isMuted, setIsMuted] = useState(false);
const [volume, setVolume] = useState(0.75);
const [audioProgress, setAudioProgress] = useState(0);
const [audioDuration, setAudioDuration] = useState(0);
const [showMusicModal, setShowMusicModal] = useState(false);
const [showEmbeddedDock, setShowEmbeddedDock] = useState(false);
const [newTrackForm, setNewTrackForm] = useState({
    title: '',
    artist: '',
    url: ''
});

const htmlAudioRef = useRef(null);
const audioCtxRef = useRef(null);
const audioTimerRef = useRef(null);

const currentTrack = playlist[trackIndex] || playlist[0] || DEFAULT_PLAYLIST_DATA[0];

const savePlaylistToStorage = (updatedList) => {
    setPlaylist(updatedList);
    try {
        localStorage.setItem('indraraj_hud_playlist_v3', JSON.stringify(updatedList));
    } catch (e) {
        // Ignore storage quota errors
    }
};

// HTML5 Audio Stream Playback Effect (for MP3 / Local / Direct Streams)
useEffect(() => {
    if (!htmlAudioRef.current) return;
    const audioEl = htmlAudioRef.current;

    if (currentTrack?.platform === 'STREAM') {
        if (audioEl.src !== currentTrack.url) {
            audioEl.src = currentTrack.url;
            audioEl.load();
        }
        audioEl.muted = isMuted;
        audioEl.volume = volume;
        if (isPlaying) {
            audioEl.play().catch(() => {
                // Autoplay blocked until interaction
            });
        } else {
            audioEl.pause();
        }
    } else {
        audioEl.pause();
    }
}, [isPlaying, isMuted, volume, trackIndex, currentTrack]);

// Web Audio API 8-Bit Synth Playback (when a SYNTH track is selected)
useEffect(() => {
    if (isPlaying && !isMuted && currentTrack?.platform === 'SYNTH') {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtxRef.current && AudioContext) {
            audioCtxRef.current = new AudioContext();
        }
        let step = 0;
        const currentNotes = currentTrack.notes || [261.63, 329.63, 392.0, 493.88, 392.0, 329.63];

        audioTimerRef.current = setInterval(() => {
            try {
                const ctx = audioCtxRef.current;
                if (!ctx) return;
                if (ctx.state === 'suspended') ctx.resume();

                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(currentNotes[step % currentNotes.length], ctx.currentTime);

                gain.gain.setValueAtTime(0.03 * volume, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0008, ctx.currentTime + 0.35);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start();
                osc.stop(ctx.currentTime + 0.35);
                step++;
            } catch (e) {
                // Ignore autoplay restriction
            }
        }, 420);
    } else {
        if (audioTimerRef.current) clearInterval(audioTimerRef.current);
    }

    return () => {
        if (audioTimerRef.current) clearInterval(audioTimerRef.current);
    };
}, [isPlaying, isMuted, volume, trackIndex, currentTrack]);

const handleSelectTrack = (idx) => {
    setTrackIndex(idx);
    const chosen = playlist[idx];
    if (!chosen) return;
    if (
        chosen.platform === 'SPOTIFY' ||
        chosen.platform === 'YOUTUBE' ||
        chosen.platform === 'SOUNDCLOUD'
    ) {
        setShowEmbeddedDock(true);
        setIsPlaying(true);
    } else {
        setIsPlaying(true);
    }
    setHudContext(`AUDIO [${chosen.platform}]: ${chosen.title.toUpperCase()}`);
};

const handleNextTrack = () => {
    const nextIdx = (trackIndex + 1) % playlist.length;
    handleSelectTrack(nextIdx);
};

const handlePrevTrack = () => {
    const prevIdx = (trackIndex - 1 + playlist.length) % playlist.length;
    handleSelectTrack(prevIdx);
};

const handleAddCustomTrack = (e) => {
    e.preventDefault();
    if (!newTrackForm.url.trim()) return;
    const parsed = parseMusicLink(newTrackForm.url);

    const addedTrack = {
        id: `track-${Date.now()}`,
        title:
            newTrackForm.title.trim() ||
            (parsed.platform === 'SPOTIFY'
                ? 'Custom Spotify Stream'
                : parsed.platform === 'YOUTUBE'
                    ? 'Custom YouTube Stream'
                    : parsed.platform === 'SOUNDCLOUD'
                        ? 'Custom SoundCloud Track'
                        : 'Custom Audio Stream'),
        artist: newTrackForm.artist.trim() || `${parsed.platform} Connected`,
        platform: parsed.platform,
        url: newTrackForm.url.trim(),
        embedUrl: parsed.embedUrl,
        cover: parsed.cover
    };

    const updated = [addedTrack, ...playlist];
    savePlaylistToStorage(updated);
    setTrackIndex(0);
    setNewTrackForm({ title: '', artist: '', url: '' });
    if (parsed.platform !== 'STREAM') {
        setShowEmbeddedDock(true);
    }
    setIsPlaying(true);
    setHudContext(`CONNECTED ${parsed.platform}: ${addedTrack.title.toUpperCase()}`);
};

const handleLocalAudioUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    const cleanTitle = file.name.replace(/\.[^/.]+$/, '');
    const localTrack = {
        id: `local-${Date.now()}`,
        title: cleanTitle,
        artist: 'Local Audio File',
        platform: 'STREAM',
        url: objectUrl,
        cover: '💿'
    };
    const updated = [localTrack, ...playlist];
    setPlaylist(updated);
    setTrackIndex(0);
    setIsPlaying(true);
    setHudContext(`LOCAL AUDIO LOADED: ${cleanTitle.toUpperCase()}`);
};

const handleRemoveTrack = (id) => {
    if (playlist.length <= 1) return;
    const updated = playlist.filter((t) => t.id !== id);
    savePlaylistToStorage(updated);
    if (trackIndex >= updated.length) {
        setTrackIndex(0);
    }
};

const formatAudioTime = (sec) => {
    if (!sec || Number.isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
};

// Project Filter & Modal State
const [projectFilter, setProjectFilter] = useState('ALL');
const [selectedProject, setSelectedProject] = useState(null);

// ============================================================================
// DYNAMIC "THE GRIND" (QUEST LOG) STATE & CRUD HANDLERS
// ============================================================================
const [quests, setQuests] = useState(DEFAULT_QUESTS_DATA);
const [showQuestModal, setShowQuestModal] = useState(false);
const [editingQuestId, setEditingQuestId] = useState(null);
const [questForm, setQuestForm] = useState({
    status: 'ACTIVE',
    xp: '+1500 XP',
    date: '2026 - Present',
    title: '',
    org: '',
    badgeText: '⚡',
    bulletsText: '',
    tagsText: ''
});

const saveQuestsToStorage = (updatedList) => {
    // Automatically alternate left/right sides for timeline balance
    const normalized = updatedList.map((q, idx) => ({
        ...q,
        side: idx % 2 === 0 ? 'left' : 'right',
        isFuture: q.status === 'UPCOMING'
    }));
    setQuests(normalized);
    try {
        localStorage.setItem('indraraj_hud_quests_v3', JSON.stringify(normalized));
    } catch (e) {
        // Ignore storage quota errors
    }
};

const openAddQuestModal = () => {
    setEditingQuestId(null);
    setQuestForm({
        status: 'ACTIVE',
        xp: '+1500 XP',
        date: 'Nov 2026 - Present',
        title: '',
        org: '',
        badgeText: 'XP',
        bulletsText: '',
        tagsText: 'Next.js, React, TypeScript'
    });
    setShowQuestModal(true);
    triggerHudToast('QUEST_FORGE: ADD NEW GRIND MILESTONE');
};

const openEditQuestModal = (q) => {
    setEditingQuestId(q.id);
    setQuestForm({
        status: q.status || 'ACTIVE',
        xp: q.xp || '+1000 XP',
        date: q.date || '',
        title: q.title || '',
        org: q.org || '',
        badgeText: q.badgeText || 'XP',
        bulletsText: Array.isArray(q.bullets) ? q.bullets.join('\n') : '',
        tagsText: Array.isArray(q.tags) ? q.tags.join(', ') : ''
    });
    setShowQuestModal(true);
    triggerHudToast(`QUEST_FORGE: EDITING ${q.title.toUpperCase()}`);
};

const handleSaveQuest = (e) => {
    e.preventDefault();
    if (!questForm.title.trim()) return;

    const parsedBullets = questForm.bulletsText
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
    const parsedTags = questForm.tagsText
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

    const questPayload = {
        status: questForm.status,
        xp: questForm.xp.trim() || '+1000 XP',
        date: questForm.date.trim() || '2026',
        title: questForm.title.trim(),
        org: questForm.org.trim() || 'Self-Directed // Engineering',
        badgeText: (questForm.badgeText.trim() || 'XP').slice(0, 3),
        hudToast: `QUEST: ${questForm.title.trim().toUpperCase()}`,
        bullets:
            parsedBullets.length > 0
                ? parsedBullets
                : ['Building and shipping real-world features and systems architecture.'],
        tags: parsedTags.length > 0 ? parsedTags : ['Engineering', 'Development']
    };

    if (editingQuestId) {
        const updated = quests.map((q) =>
            q.id === editingQuestId ? { ...q, ...questPayload } : q
        );
        saveQuestsToStorage(updated);
        triggerHudToast(`QUEST UPDATED: ${questPayload.title.toUpperCase()}`);
    } else {
        const newQuest = {
            id: `quest-${Date.now()}`,
            ...questPayload
        };
        saveQuestsToStorage([newQuest, ...quests]);
        updateProfileField('xp', Math.min(profile.maxXp, xp + 250));
        triggerHudToast(`NEW QUEST ADDED: ${newQuest.title.toUpperCase()} (+250 XP)`);
    }
    setShowQuestModal(false);
};

const handleDeleteQuest = (id, title) => {
    const updated = quests.filter((q) => q.id !== id);
    saveQuestsToStorage(updated);
    triggerHudToast(`QUEST REMOVED: ${title.toUpperCase()}`);
    if (editingQuestId === id) {
        setShowQuestModal(false);
    }
};

const handleResetQuests = () => {
    saveQuestsToStorage(DEFAULT_QUESTS_DATA);
    triggerHudToast('QUEST_LOG: RESTORED DEFAULT TIMELINE');
};
// ============================================================================
// DYNAMIC "FEATURED PROJECTS" STATE & CRUD HANDLERS
// ============================================================================
const [projects, setProjects] = useState(DEFAULT_PROJECTS_DATA);
// Load saved portfolio data from localStorage
useEffect(() => {
    try {
        const savedProfile = localStorage.getItem('indraraj_hud_profile_v3');
        const savedSkills = localStorage.getItem('indraraj_hud_skills_v3');
        const savedPlaylist = localStorage.getItem('indraraj_hud_playlist_v3');
        const savedQuests = localStorage.getItem('indraraj_hud_quests_v3');
        const savedProjects = localStorage.getItem('indraraj_hud_projects_v3');

        if (savedProfile) {
            setProfile({
                ...DEFAULT_PROFILE_DATA,
                ...JSON.parse(savedProfile)
            });
        }

        if (savedSkills) setSkills(JSON.parse(savedSkills));
        if (savedPlaylist) setPlaylist(JSON.parse(savedPlaylist));
        if (savedQuests) setQuests(JSON.parse(savedQuests));
        if (savedProjects) setProjects(JSON.parse(savedProjects));

    } catch (error) {
        console.error('Error loading portfolio data:', error);
    }
}, []);
const [showProjectEditorModal, setShowProjectEditorModal] = useState(false);
const [editingProjectId, setEditingProjectId] = useState(null);
const [projectForm, setProjectForm] = useState({
    title: '',
    category: 'WEB APPS',
    url: '',
    liveLink: '',
    repoLink: '',
    desc: '',
    tagsText: '',
    metricsText: '',
    previewType: 'hud'
});

const saveProjectsToStorage = (updatedList) => {
    setProjects(updatedList);
    updateProfileField('projectsCount', `${updatedList.length}+`);
    try {
        localStorage.setItem('indraraj_hud_projects_v3', JSON.stringify(updatedList));
    } catch (e) {
        // Ignore storage quota errors
    }
};

const openAddProjectModal = () => {
    setEditingProjectId(null);
    setProjectForm({
        title: '',
        category: 'WEB APPS',
        url: 'my-project.vercel.app',
        liveLink: 'https://',
        repoLink: 'https://github.com/Indrajthakur/',
        desc: '',
        tagsText: 'Next.js, React, Tailwind CSS, Vercel',
        metricsText: 'Live on Vercel, Responsive UI, Fast Performance',
        previewType: 'hud'
    });
    setShowProjectEditorModal(true);
    triggerHudToast('PROJECT_FORGE: ADD NEW FEATURED PROJECT');
};

const openEditProjectModal = (proj) => {
    setEditingProjectId(proj.id);
    setProjectForm({
        title: proj.title || '',
        category: proj.category || 'WEB APPS',
        url: proj.url || '',
        liveLink: proj.liveLink || '',
        repoLink: proj.repoLink || '',
        desc: proj.desc || '',
        tagsText: Array.isArray(proj.tags) ? proj.tags.join(', ') : '',
        metricsText: Array.isArray(proj.metrics) ? proj.metrics.join(', ') : '',
        previewType: proj.previewType || 'hud'
    });
    setShowProjectEditorModal(true);
    triggerHudToast(`PROJECT_FORGE: EDITING ${proj.title.toUpperCase()}`);
};

const handleSaveProject = (e) => {
    e.preventDefault();
    if (!projectForm.title.trim()) return;

    const parsedTags = projectForm.tagsText
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);
    const parsedMetrics = projectForm.metricsText
        .split(',')
        .map((m) => m.trim())
        .filter(Boolean);

    const accentPalette = {
        cravora: 'from-orange-500/25 via-rose-500/10 to-slate-900',
        analytics: 'from-amber-500/20 via-emerald-500/10 to-slate-900',
        kanban: 'from-cyan-500/20 via-blue-500/10 to-slate-900',
        hud: 'from-emerald-500/20 via-amber-500/10 to-slate-900',
        terminal: 'from-purple-500/20 via-indigo-500/10 to-slate-900'
    };

    const cleanUrl =
        projectForm.url.trim() ||
        projectForm.liveLink.replace(/^https?:\/\//, '').replace(/\/$/, '') ||
        'github.com/Indrajthakur';

    const projectPayload = {
        title: projectForm.title.trim(),
        category: projectForm.category,
        url: cleanUrl,
        liveLink: projectForm.liveLink.trim() || 'https://github.com/Indrajthakur',
        repoLink: projectForm.repoLink.trim() || 'https://github.com/Indrajthakur',
        accent: accentPalette[projectForm.previewType] || accentPalette.hud,
        hudToast: `PROJECT: ${projectForm.title.trim().toUpperCase()}`,
        desc:
            projectForm.desc.trim() ||
            'Full-stack production application engineered and deployed by Indraraj Singh Thakur.',
        tags: parsedTags.length > 0 ? parsedTags : ['React', 'Next.js', 'Tailwind CSS'],
        metrics:
            parsedMetrics.length > 0 ? parsedMetrics : ['Production Ready', 'Responsive UI/UX'],
        previewType: projectForm.previewType
    };

    if (editingProjectId) {
        const updated = projects.map((p) =>
            p.id === editingProjectId ? { ...p, ...projectPayload } : p
        );
        saveProjectsToStorage(updated);
        triggerHudToast(`PROJECT UPDATED: ${projectPayload.title.toUpperCase()}`);
    } else {
        const newProj = {
            id: `proj-${Date.now()}`,
            ...projectPayload
        };
        saveProjectsToStorage([newProj, ...projects]);
        updateProfileField('xp', Math.min(profile.maxXp, xp + 300));
        triggerHudToast(`NEW PROJECT SHIPPED: ${newProj.title.toUpperCase()} (+300 XP)`);
    }
    setShowProjectEditorModal(false);
};

const handleDeleteProject = (id, title) => {
    const updated = projects.filter((p) => p.id !== id);
    saveProjectsToStorage(updated);
    triggerHudToast(`PROJECT REMOVED: ${title.toUpperCase()}`);
    if (editingProjectId === id) {
        setShowProjectEditorModal(false);
    }
    if (selectedProject?.id === id) {
        setSelectedProject(null);
    }
};

const handleResetProjects = () => {
    saveProjectsToStorage(DEFAULT_PROJECTS_DATA);
    triggerHudToast('PROJECTS: RESTORED DEFAULT 5 PROJECTS');
};

// Resume Save File Modal
const [showResumeModal, setShowResumeModal] = useState(false);

// Full Next.js Repository Code Exporter Modal
const [showCodeExportModal, setShowCodeExportModal] = useState(false);
const [activeExportFile, setActiveExportFile] = useState('package.json');
const [copiedExportFile, setCopiedExportFile] = useState(false);

// Production-ready Next.js repository files for Indraraj's local project & Vercel deployment
const repoFiles = useMemo(
    () => ({
        'package.json': `{
  "name": "indraraj-portfolio",
  "version": "3.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "lucide-react": "^0.454.0",
    "next": "15.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14"
  }
}`,
        'next.config.mjs': `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;`,
        'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))"
      }
    }
  },
  plugins: []
};`,
        'app/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Press+Start+2P&display=swap');

:root {
  color-scheme: dark;
}

body {
  background-color: #070a0f;
  color: #e2e8f0;
  font-family: 'JetBrains Mono', monospace;
  overflow-x: hidden;
}

.font-pixel {
  font-family: 'Press Start 2P', monospace;
  letter-spacing: -0.02em;
}

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

.bg-cyber-grid {
  background-size: 34px 34px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
}`,
        'app/layout.jsx': `import './globals.css';

export const metadata = {
  title: '${profile.fullName} | LVL ${profile.level} ${profile.navClass}',
  description: '${profile.currentMission}',
  keywords: ['Indraraj Singh Thakur', 'Cravora', 'StudyFlow', 'RGPV', 'Rehli', 'Sagar', 'Full-Stack Developer', 'Next.js', 'C++'],
  authors: [{ name: '${profile.fullName}', url: '${profile.livePortfolioUrl}' }],
  openGraph: {
    title: '${profile.fullName} — RPG System HUD Portfolio v3.0',
    description: '${profile.heroBio}',
    url: '${profile.livePortfolioUrl}',
    siteName: '${profile.fullName} Portfolio',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070a0f] text-slate-200 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}`,
        'data/profileData.json': JSON.stringify(
            {
                profile,
                skills,
                quests,
                projects,
                playlist
            },
            null,
            2
        ),
        'DEPLOY_INSTRUCTIONS.md': `# Indraraj Singh Thakur — RPG System HUD Portfolio v3.0
Live URL: ${profile.livePortfolioUrl}
GitHub: ${profile.githubUrl}

## Quick Setup in Your Local Next.js Repo (\`indraraj-portfolio\`)

1. Copy **\`App.jsx\`** from the Canvas code editor on the right into:
   - \`app/page.jsx\` (Add \`"use client";\` as the very first line at the top of \`app/page.jsx\`).
2. Copy **\`package.json\`**, **\`tailwind.config.js\`**, **\`app/globals.css\`**, and **\`app/layout.jsx\`** from this exporter into your project folder.
3. Place your resume PDF at \`public/resume.pdf\`.
4. Run locally & push to Vercel:
\`\`\`bash
npm install
npm run dev
git add .
git commit -m "feat: upgrade to v3.0 RPG System HUD with Cravora, Snake, and Multi-Platform Music Deck"
git push origin main
\`\`\``
    }),
    [profile, skills, quests, projects, playlist]
);

const handleCopyRepoFile = async (filename) => {
    const content = repoFiles[filename] || '';
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(content);
        } else {
            const ta = document.createElement('textarea');
            ta.value = content;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        setCopiedExportFile(true);
        triggerHudToast(`COPIED FILE: ${filename.toUpperCase()}`);
        setTimeout(() => setCopiedExportFile(false), 2200);
    } catch (e) {
        // Fallback download
    }
};

const handleDownloadRepoFile = (filename) => {
    const content = repoFiles[filename] || '';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename.replace('/', '_');
    a.click();
    URL.revokeObjectURL(url);
    triggerHudToast(`DOWNLOADED: ${filename.toUpperCase()}`);
};

// Contact Form State
const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Internship / Project Collaboration',
    message: ''
});
const [formSubmitted, setFormSubmitted] = useState(false);

// Portfolio State
const [visitors, setVisitors] = useState(42);
const [snakeImgError, setSnakeImgError] = useState(false);
const [snakeBranchIdx, setSnakeBranchIdx] = useState(0);
const xp = Number(profile.xp) || 3420;

// Candidate URLs from https://github.com/Indrajthakur/Indrajthakur
const snakeSvgUrls = [
    'https://raw.githubusercontent.com/Indrajthakur/Indrajthakur/output/github-contribution-grid-snake-dark.svg',
    'https://raw.githubusercontent.com/Indrajthakur/Indrajthakur/output/github-contribution-grid-snake.svg',
    'https://raw.githubusercontent.com/Indrajthakur/Indrajthakur/main/output/github-contribution-grid-snake-dark.svg',
    'https://raw.githubusercontent.com/Indrajthakur/Indrajthakur/main/github-contribution-grid-snake-dark.svg'
];

// Typed Mission Subtitle Effect
const missionTitles = [
    'Full-Stack Web Developer (Next.js / React)',
    'Creator of Cravora (cravora-inky.vercel.app)',
    'B.Tech CS Engineering @ RGPV Sagar',
    'C++ & OOP Systems Builder'
];
const [typedText, setTypedText] = useState('');
const [titleIdx, setTitleIdx] = useState(0);

useEffect(() => {
    let charIdx = 0;
    const currentString = missionTitles[titleIdx];
    const typeInterval = setInterval(() => {
        if (charIdx <= currentString.length) {
            setTypedText(currentString.slice(0, charIdx));
            charIdx++;
        } else {
            clearInterval(typeInterval);
            setTimeout(() => {
                setTitleIdx((prev) => (prev + 1) % missionTitles.length);
            }, 2200);
        }
    }, 75);
    return () => clearInterval(typeInterval);
}, [titleIdx]);

// Smooth Scroll Helper
const scrollToSection = (id, label, contextMsg) => {
    setActiveNav(label);
    triggerHudToast(contextMsg);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const filteredProjects = useMemo(() => {
    if (projectFilter === 'ALL') return projects;
    return projects.filter((p) => p.category === projectFilter);
}, [projectFilter, projects]);

const achievements = [
    {
        title: 'First Production Ship',
        metricLabel: 'VERCEL',
        metricVal: '99.9% Up',
        metricColor: 'text-amber-400',
        desc: 'Shipped Cravora (cravora-inky.vercel.app) and indraraj-portfolio-j1n8.vercel.app to production with automated Git deployments.',
        linkText: 'View Cravora →',
        linkUrl: 'https://cravora-inky.vercel.app/',
        year: '2026',
        icon: Trophy,
        hudToast: 'ACHIEVEMENT: FIRST PRODUCTION SHIP ON VERCEL'
    },
    {
        title: `${profile.githubStreak} GitHub Streak`,
        metricLabel: 'GITHUB',
        metricVal: `streak: ${profile.githubStreak}`,
        metricColor: 'text-amber-400',
        desc: 'Consistent daily commits across Cravora, StudyFlow, Task-manager-app, and indrajportfolio repositories. Discipline > motivation.',
        linkText: 'See @Indrajthakur →',
        linkUrl: profile.githubUrl,
        year: '2026',
        icon: Zap,
        hudToast: `ACHIEVEMENT: ${profile.githubStreak.toUpperCase()} GITHUB STREAK`
    },
    {
        title: 'B.Tech CS Engineering',
        metricLabel: 'RGPV',
        metricVal: '2024 - 28',
        metricColor: 'text-sky-400',
        desc: 'Pursuing Computer Science & Engineering at Gyan Sagar College of Engineering, Sagar (OOP in C++, Data Structures, Digital Systems).',
        linkText: 'View Quest →',
        linkUrl: '#experience',
        year: '2026',
        icon: GraduationCap,
        hudToast: 'ACHIEVEMENT: B.TECH CS @ GYAN SAGAR COLLEGE (RGPV)'
    },
    {
        title: 'Git & Terminal Craftsman',
        metricLabel: 'REPOS',
        metricVal: '@Indrajthakur',
        metricColor: 'text-amber-400',
        desc: 'Managed multi-branch Git workflows, rebase conflict resolution, and production deployments directly from PowerShell & CLI.',
        linkText: 'GitHub Profile →',
        linkUrl: profile.githubUrl,
        year: '2026',
        icon: GitBranch,
        hudToast: 'ACHIEVEMENT: GIT & TERMINAL CRAFTSMAN'
    },
    {
        title: `${profile.projectsCount} Projects Shipped`,
        metricLabel: 'PROJECTS',
        metricVal: `${profile.projectsCount} live`,
        metricColor: 'text-orange-400',
        desc: 'Built and shipped Cravora (cravora-inky.vercel.app), StudyFlow, Task Manager App, System HUD Portfolio v3.0, and C++ OOP systems.',
        linkText: 'See Work →',
        linkUrl: '#projects',
        year: '2026',
        icon: Rocket,
        highlighted: true,
        hudToast: `ACHIEVEMENT: ${profile.projectsCount} PROJECTS SHIPPED`
    },
    {
        title: 'C++ & Next.js Dual-Class',
        metricLabel: 'STACK',
        metricVal: 'C++ / React',
        metricColor: 'text-amber-400',
        desc: 'Combining low-level Object-Oriented Programming in C++ with modern full-stack React, Next.js, and Tailwind CSS architecture.',
        linkText: 'Skill Deck →',
        linkUrl: '#skills',
        year: '2026',
        icon: Cpu,
        hudToast: 'ACHIEVEMENT: C++ & NEXT.JS DUAL-CLASS'
    },
    {
        title: 'Rehli & Sagar Roots',
        metricLabel: 'ALUMNI',
        metricVal: 'SVS Rehli',
        metricColor: 'text-emerald-400',
        desc: 'Graduate of Swami Vivekanand School, Rehli (Sagar, MP) — evolved from PC & GTA V config modding to full-stack engineering.',
        linkText: 'Read Timeline →',
        linkUrl: '#experience',
        year: '2024',
        icon: Sparkles,
        hudToast: 'ACHIEVEMENT: SWAMI VIVEKANAND SCHOOL REHLI'
    },
    {
        title: 'Lighthouse 98+ HUD',
        metricLabel: 'SCORE',
        metricVal: '98 / 100',
        metricColor: 'text-purple-400',
        desc: 'Engineered a zero-bloat, fast-loading Next.js & Tailwind CSS RPG interface with crisp SVG pixel art and instant responsiveness.',
        linkText: 'Test Live →',
        linkUrl: profile.livePortfolioUrl,
        year: '2026',
        icon: Activity,
        hudToast: 'ACHIEVEMENT: LIGHTHOUSE 98+ PERFORMANCE'
    }
];

// Generate deterministic realistic 52-week x 7-day GitHub contribution matrix
const githubGrid = useMemo(() => {
    const weeks = [];
    for (let w = 0; w < 50; w++) {
        const days = [];
        for (let d = 0; d < 7; d++) {
            // Higher density in recent weeks to reflect active streak
            const seed = (w * 7 + d * 13 + 7) % 19;
            let level = 0;
            if (w > 38) {
                level = seed % 5 === 0 ? 4 : seed % 3 === 0 ? 3 : seed % 2 === 0 ? 2 : 1;
            } else if (w > 20) {
                level = seed < 2 ? 4 : seed < 5 ? 3 : seed < 9 ? 2 : seed < 13 ? 1 : 0;
            } else {
                level = seed < 1 ? 3 : seed < 4 ? 2 : seed < 9 ? 1 : 0;
            }
            days.push({
                level,
                commits: level === 0 ? 0 : level * 2 + (w % 3)
            });
        }
        weeks.push(days);
    }
    return weeks;
}, []);

const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormSubmitted(true);
    updateProfileField('xp', Math.min(profile.maxXp, xp + 180));
    setHudContext('QUEST COMPLETE: OPENING MAIL CLIENT (+180 XP)');

    // Trigger real mailto link so message goes straight to indrajthakur08@gmail.com
    const mailtoSubject = encodeURIComponent(
        `[Portfolio HUD] ${contactForm.subject} — from ${contactForm.name}`
    );
    const mailtoBody = encodeURIComponent(
        `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    window.open(`mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
};

// Theme color helpers
const accentText = isGold ? 'text-amber-400' : 'text-emerald-400';
const accentBg = isGold ? 'bg-amber-400' : 'bg-[#84cc16]';
const accentBorder = isGold ? 'border-amber-500/40' : 'border-emerald-500/40';
const accentGlow = isGold
    ? 'shadow-[0_0_25px_rgba(245,158,11,0.22)]'
    : 'shadow-[0_0_25px_rgba(34,197,94,0.22)]';

return (
    <div className="min-h-screen bg-[#070a0f] text-slate-200 font-mono relative overflow-x-hidden selection:bg-amber-500 selection:text-black">
        {/* Google Fonts Injection for 8-Bit 'Press Start 2P' & 'JetBrains Mono' */}
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Press+Start+2P&display=swap');

        .font-pixel {
          font-family: 'Press Start 2P', monospace;
          letter-spacing: -0.02em;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        /* Subtle CRT & Pixel Grid Overlay */
        .bg-cyber-grid {
          background-size: 34px 34px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.028) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
        }
        .scanlines {
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 2px,
            rgba(0, 0, 0, 0.16) 3px
          );
        }
      `}</style>

        {/* ==========================================================================
          ATMOSPHERIC PIXEL FORTRESS NIGHT BACKGROUND + GRID OVERLAY
      ========================================================================== */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Pixel Art Night Ruin / Rain Silhouette SVG Background */}
            <svg
                className="w-full h-full object-cover opacity-25"
                viewBox="0 0 800 500"
                preserveAspectRatio="xMidYMid slice"
                shapeRendering="crispEdges"
            >
                <defs>
                    <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#050811" />
                        <stop offset="55%" stopColor="#0d1726" />
                        <stop offset="100%" stopColor="#06080d" />
                    </linearGradient>
                </defs>
                <rect width="800" height="500" fill="url(#nightSky)" />
                {/* Distant Pixel Pillars & Trees */}
                <rect x="60" y="60" width="32" height="320" fill="#0b1320" />
                <rect x="140" y="90" width="24" height="290" fill="#0a111c" />
                <rect x="330" y="40" width="40" height="340" fill="#0b1320" />
                {/* Pixel Gateway Ruin */}
                <rect x="215" y="200" width="25" height="190" fill="#131e30" />
                <rect x="310" y="200" width="25" height="190" fill="#131e30" />
                <rect x="230" y="180" width="90" height="22" fill="#172438" />
                <rect x="248" y="165" width="54" height="18" fill="#1d2c44" />
                {/* Pixel Stone Staircase on Right */}
                {Array.from({ length: 14 }).map((_, idx) => (
                    <rect
                        key={idx}
                        x={380 + idx * 28}
                        y={370 - idx * 22}
                        width="45"
                        height="18"
                        fill="#141e2e"
                    />
                ))}
                {/* Atmospheric Diagonal Rain Lines */}
                {Array.from({ length: 35 }).map((_, idx) => (
                    <line
                        key={idx}
                        x1={(idx * 47) % 800}
                        y1={(idx * 29) % 400}
                        x2={((idx * 47) % 800) - 18}
                        y2={((idx * 29) % 400) + 55}
                        stroke="#38bdf8"
                        strokeWidth="1"
                        strokeOpacity="0.12"
                    />
                ))}
            </svg>
            <div className="absolute inset-0 bg-cyber-grid" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#05070b_95%)]" />
        </div>

        {/* ==========================================================================
          SIDE VERTICAL HUD RAILS (DESKTOP TELEMETRY)
      ========================================================================== */}
        <div className="hidden xl:flex fixed left-3 top-28 bottom-12 w-6 flex-col items-center justify-between z-30 pointer-events-none select-none">
            <span className={`w-1.5 h-1.5 rotate-45 ${accentBg}`} />
            <div className="writing-vertical-rl -rotate-180 text-[10px] tracking-[0.28em] text-slate-500">
                MEM_SYS // 24.1%
            </div>
            <span className={`w-1.5 h-1.5 rotate-45 ${accentBg} opacity-60`} />
            <div className="writing-vertical-rl -rotate-180 text-[10px] tracking-[0.28em] text-slate-500">
                NET_LINK // STABLE
            </div>
            <span className={`w-1.5 h-1.5 rotate-45 ${accentBg}`} />
        </div>

        <div className="hidden xl:flex fixed right-3 top-28 bottom-12 w-6 flex-col items-center justify-between z-30 pointer-events-none select-none">
            <span className={`w-1.5 h-1.5 rotate-45 ${accentBg}`} />
            <div className="writing-vertical-rl text-[10px] tracking-[0.28em] text-slate-500">
                CPU_LOAD // 12.7%
            </div>
            <span className={`w-1.5 h-1.5 rotate-45 ${accentBg} opacity-60`} />
            <div className="writing-vertical-rl text-[10px] tracking-[0.28em] text-slate-500">
                BUILD // PORTFOLIO_V3.0
            </div>
            <span className={`w-1.5 h-1.5 rotate-45 ${accentBg}`} />
        </div>

        {/* ==========================================================================
          TOP STICKY HUD NAVBAR (WITH DYNAMIC CONTEXT TOAST PILL)
      ========================================================================== */}
        <header className="sticky top-0 z-50 bg-[#080b11]/95 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between gap-3">
                {/* Left: Level & Class */}
                <div className="flex items-center gap-3">
                    <div
                        className={`px-2 py-0.5 text-xs font-bold border ${isGold
                                ? 'bg-amber-500/15 border-amber-400 text-amber-300'
                                : 'bg-emerald-500/15 border-emerald-400 text-emerald-300'
                            }`}
                    >
                        LVL {profile.level}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider text-slate-200">
                        <span>{profile.navClass}</span>
                        <span className="text-amber-400">⚡</span>
                    </div>
                </div>

                {/* Center Navigation Links */}
                <nav className="hidden lg:flex items-center gap-6 text-xs tracking-widest">
                    {[
                        { label: 'HOME', id: 'home', toast: 'SECTION: HOME // SYSTEM_BOOT' },
                        { label: 'EXPERIENCE', id: 'experience', toast: 'QUEST_LOG: THE GRIND' },
                        { label: 'SKILLS', id: 'skills', toast: 'SECTION: SKILL_DECK' },
                        { label: 'PROJECTS', id: 'projects', toast: 'ARCHIVE: FEATURED PROJECTS' },
                        { label: 'TROPHIES', id: 'achievements', toast: 'TROPHIES: ACHIEVEMENTS' },
                        { label: 'CONTACT', id: 'contact', toast: 'COMMS: CONTACT TERMINAL' }
                    ].map((item) => {
                        const isActive = activeNav === item.label;
                        return (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.id, item.label, item.toast)}
                                className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${isActive
                                        ? `${accentText} font-bold`
                                        : 'text-slate-400 hover:text-slate-100'
                                    }`}
                            >
                                {isActive && <span>&gt;</span>}
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                {/* Right: Systematic XP Station + Profile Avatar Speech Popover + Edit Config */}
                <div className="flex items-center gap-3.5 relative">
                    {/* XP Station Progress (Never overlapped or pushed around) */}
                    <div className="hidden sm:flex flex-col items-end w-32 shrink-0">
                        <div className="w-full h-1.5 bg-slate-800 overflow-hidden rounded-full border border-white/10">
                            <div
                                className={`h-full transition-all duration-500 ${isGold
                                        ? 'bg-gradient-to-r from-amber-500 to-yellow-300'
                                        : 'bg-gradient-to-r from-emerald-500 to-lime-300'
                                    }`}
                                style={{ width: `${Math.min(100, (xp / profile.maxXp) * 100)}%` }}
                            />
                        </div>
                        <div className="w-full flex justify-between text-[9px] text-slate-400 mt-0.5 font-mono">
                            <span>XP_STATION</span>
                            <span className={accentText}>{xp}/5k</span>
                        </div>
                    </div>

                    {/* Top Navbar Mini Profile Avatar with Clean RPG HUD Speech Popover */}
                    <div className="relative flex items-center">
                        <button
                            type="button"
                            onClick={() => setShowHudBubble((prev) => !prev)}
                            className="relative rounded-full focus:outline-none cursor-pointer group"
                            title="Click to toggle HUD status bubble"
                        >
                            <IndrarajProfileAvatar
                                customUrl={profile.customAvatarUrl}
                                sizeClass="w-9 h-9"
                                isGold={isGold}
                            />
                            <span
                                className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#080b11] ${isGold ? 'bg-amber-400' : 'bg-emerald-400'
                                    }`}
                            />
                        </button>

                        {/* Systematic Floating HUD Speech Bubble (Appears neatly below/left without overlapping XP bar) */}
                        {showHudBubble && (
                            <div
                                onClick={() => setShowHudBubble(false)}
                                className={`hidden md:flex items-center gap-2.5 absolute right-12 top-1/2 -translate-y-1/2 z-50 px-3 py-1.5 rounded-md bg-[#0b1018]/95 backdrop-blur-md border ${isGold
                                        ? 'border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.28)]'
                                        : 'border-emerald-400/80 shadow-[0_0_20px_rgba(16,185,129,0.28)]'
                                    } whitespace-nowrap cursor-pointer transition-all duration-200`}
                            >
                                {/* Category Pill */}
                                <span
                                    className={`px-1.5 py-0.5 text-[9px] font-extrabold tracking-widest rounded uppercase ${isGold
                                            ? 'bg-amber-400 text-black'
                                            : 'bg-emerald-400 text-black'
                                        }`}
                                >
                                    {parsedHud.category}
                                </span>

                                {/* Clean Monospace Detail Text */}
                                <span className="text-[10px] font-bold tracking-wider text-white max-w-[230px] truncate">
                                    {parsedHud.detail}
                                </span>

                                {/* Speech Pointer Triangle pointing right toward your profile avatar */}
                                <span
                                    className={`absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45 bg-[#0b1018] border-t border-r ${isGold ? 'border-amber-400/80' : 'border-emerald-400/80'
                                        }`}
                                />
                            </div>
                        )}
                    </div>

                    {/* EDIT_STATS // HUD_CONFIG Button */}
                    <button
                        onClick={() => {
                            setShowConfigDrawer(true);
                            triggerHudToast('CONFIG: LIVE EDIT PLAYER STATS');
                        }}
                        className={`px-2.5 py-1 text-[10px] font-bold tracking-wider rounded border cursor-pointer transition-all shrink-0 ${isGold
                                ? 'border-amber-400/60 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20'
                                : 'border-emerald-400/60 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20'
                            }`}
                        title="Live-Edit Your Portfolio Stats & Links"
                    >
                        ⚙ EDIT_STATS
                    </button>

                    {/* EXPORT FULL NEXT.JS REPO FILES BUTTON */}
                    <button
                        onClick={() => {
                            setShowCodeExportModal(true);
                            triggerHudToast('REPO_EXPORT: NEXT.JS MULTI-FILE ARCHITECTURE');
                        }}
                        className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-extrabold tracking-wider rounded border border-cyan-400/60 bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 cursor-pointer transition-all shrink-0"
                        title="Get Each Next.js File Ready for GitHub & Vercel"
                    >
                        <span>📦</span>
                        <span>GET_FILES</span>
                    </button>
                </div>
            </div>

            {/* Sub-Navbar Telemetry Strip (Exact Match to Screenshot 1 + Clean Live Status Pill) */}
            <div className="bg-[#05070b]/90 border-t border-white/5 px-4 sm:px-8 py-1.5 text-[11px] text-slate-400">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        <a
                            href={profile.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => triggerHudToast(`GITHUB: ${profile.githubHandle}`)}
                            className="flex items-center gap-1.5 hover:text-white transition-colors"
                        >
                            <Github className="w-3.5 h-3.5" />
                            <span>{profile.githubHandle}</span>
                        </a>
                        <a
                            href={profile.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => triggerHudToast(`LINKEDIN: ${profile.linkedinHandle}`)}
                            className="flex items-center gap-1.5 hover:text-white transition-colors"
                        >
                            <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href={`mailto:${profile.email}`}
                            onClick={() => triggerHudToast(`MAILTO: ${profile.email.toUpperCase()}`)}
                            className="flex items-center gap-1.5 hover:text-white transition-colors"
                        >
                            <Mail className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{profile.email}</span>
                        </a>
                        <a
                            href={`tel:${profile.phoneRaw}`}
                            onClick={() => triggerHudToast(`COMMS: ${profile.phone}`)}
                            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors text-amber-300/90"
                        >
                            <span>📞 {profile.phone}</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-3 ml-auto">
                        {/* Systematic Inline Telemetry Log */}
                        <div className="hidden lg:flex items-center gap-1.5 text-[10px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/10">
                            <span className={`font-extrabold ${accentText}`}>[{parsedHud.category}]</span>
                            <span className="text-slate-300 max-w-[220px] truncate">{parsedHud.detail}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-slate-500">STATUS:</span>
                            <span className={`font-bold ${accentText}`}>ONLINE</span>
                            <span
                                className={`w-2 h-2 rounded-full animate-pulse ${isGold ? 'bg-amber-400' : 'bg-emerald-400'
                                    }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* ==========================================================================
          MAIN CONTENT CONTAINER
      ========================================================================== */}
        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-10 pb-24 space-y-28">
            {/* ========================================================================
            SECTION 1: HERO & PLAYER_CARD // 001
        ======================================================================== */}
            <section id="home" className="scroll-mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* LEFT COLUMN: INTRO, CURRENT MISSION, QUICK STATS, CTAs */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* System Boot Banner */}
                        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest">
                            <span className={accentText}>
                  // SYSTEM_BOOT :: PORTFOLIO_V3.0 :: READY
                            </span>
                            <span className={`inline-block w-2 h-4 ${accentBg} animate-pulse`} />
                        </div>

                        {/* Main 8-Bit Hero Heading */}
                        <div className="space-y-3">
                            <h1 className="font-pixel text-2xl sm:text-4xl md:text-[40px] leading-tight text-white tracking-tight">
                                Hi, I&apos;m{' '}
                                <span className={accentText}>{profile.shortName}!</span>
                            </h1>
                            <div className={`h-0.5 w-full max-w-md ${isGold ? 'bg-amber-500/40' : 'bg-emerald-500/40'}`} />
                        </div>

                        {/* Bio Quote */}
                        <blockquote
                            className={`pl-4 border-l-2 ${isGold ? 'border-amber-400' : 'border-emerald-400'
                                } text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl`}
                        >
                            {profile.heroBio}
                        </blockquote>

                        {/* Typed Live Role */}
                        <div className="space-y-1">
                            <div className="text-[10px] tracking-[0.25em] text-slate-500 uppercase">
                                ACTIVE_SPEC // ROLE
                            </div>
                            <div className="text-base sm:text-lg font-bold text-white flex items-center gap-1 h-7">
                                <span>{typedText}</span>
                                <span className={`inline-block w-0.5 h-5 ${accentBg} animate-pulse`} />
                            </div>
                        </div>

                        {/* CURRENT_MISSION Terminal Box */}
                        <div className="bg-[#0c1017]/90 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-xl">
                            <div className="px-4 py-2 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block" />
                                    <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block" />
                                    <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 inline-block" />
                                    <span className="text-[10px] tracking-widest text-slate-400 ml-1">
                                        CURRENT_MISSION
                                    </span>
                                </div>
                                <span className="text-[10px] text-cyan-400 font-semibold">CRAVORA_V1</span>
                            </div>
                            <div className="p-4 space-y-1.5">
                                <div className="text-[11px] font-bold tracking-wider text-cyan-400">
                                    CURRENT_MISSION
                                </div>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    {profile.currentMission}
                                </p>
                            </div>
                        </div>

                        {/* QUICK_STATS // PLAYER_INFO Box */}
                        <div className="bg-[#09131c]/80 backdrop-blur-md border border-cyan-500/30 rounded-lg overflow-hidden">
                            <div className="px-4 py-1.5 bg-cyan-500/10 border-b border-cyan-500/20 text-[10px] font-bold tracking-widest text-cyan-300">
                                QUICK_STATS // PLAYER_INFO
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-cyan-500/20">
                                <div className="p-3.5 flex items-center gap-3">
                                    <div className="p-2 rounded bg-cyan-500/10 text-cyan-400">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] tracking-wider text-slate-400">LOCATION</div>
                                        <div className="text-xs sm:text-sm font-bold text-white">
                                            {profile.shortLocation}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3.5 flex items-center gap-3">
                                    <div className="p-2 rounded bg-cyan-500/10 text-cyan-400">
                                        <GraduationCap className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] tracking-wider text-slate-400">EDUCATION</div>
                                        <div className="text-xs sm:text-sm font-bold text-white">
                                            {profile.educationShort}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-3.5 pt-2">
                            <button
                                onClick={() =>
                                    scrollToSection('projects', 'PROJECTS', 'ARCHIVE: FEATURED PROJECTS')
                                }
                                onMouseEnter={() => setHudContext('ACTION: JUMP TO FEATURED PROJECTS')}
                                className={`px-5 py-3 text-xs font-extrabold tracking-wider text-black rounded transition-all cursor-pointer ${isGold
                                        ? 'bg-amber-400 hover:bg-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                                        : 'bg-[#84cc16] hover:bg-lime-400 shadow-[0_0_20px_rgba(132,204,22,0.4)]'
                                    }`}
                            >
                                VIEW_WORK
                            </button>

                            <button
                                onClick={() => {
                                    setShowResumeModal(true);
                                    setHudContext('SAVE_FILE: RESUME_V3.PDF OPENED');
                                }}
                                onMouseEnter={() => setHudContext('SAVE_FILE: DOWNLOAD / VIEW RESUME')}
                                className="px-5 py-3 text-xs font-bold tracking-wider text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-400/50 rounded flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                            >
                                <Download className="w-3.5 h-3.5" />
                                <span>DOWNLOAD SAVE FILE (RESUME)</span>
                            </button>

                            <button
                                onClick={() =>
                                    scrollToSection('contact', 'CONTACT', 'COMMS: SEND TRANSMISSION')
                                }
                                className="text-xs text-slate-400 hover:text-white tracking-wider flex items-center gap-1 px-2 py-2 cursor-pointer"
                            >
                                <span>LET&apos;S_CONNECT</span>
                                <span>→</span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: PLAYER_CARD // 001 + CHIPTUNE SYNTH MINI-PLAYER */}
                    <div className="lg:col-span-5">
                        <div
                            className={`relative bg-[#0c1017]/95 backdrop-blur-md border ${accentBorder} rounded-lg p-5 ${accentGlow} transition-all`}
                        >
                            {/* Corner HUD Brackets */}
                            <span
                                className={`absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 ${isGold ? 'border-amber-400' : 'border-emerald-400'
                                    }`}
                            />
                            <span
                                className={`absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 ${isGold ? 'border-amber-400' : 'border-emerald-400'
                                    }`}
                            />

                            {/* Card Window Header */}
                            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-sm bg-fuchsia-500 inline-block" />
                                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 inline-block" />
                                    <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 inline-block" />
                                    <span className="text-[10px] tracking-widest text-slate-400 ml-1.5">
                                        PLAYER_CARD // 001
                                    </span>
                                </div>
                                <span className="text-[10px] text-slate-500">ID #IST-07</span>
                            </div>

                            {/* Avatar + Name + Class */}
                            <div className="flex items-center gap-4 mb-5">
                                <IndrarajProfileAvatar
                                    customUrl={profile.customAvatarUrl}
                                    sizeClass="w-16 h-16 sm:w-20 sm:h-20"
                                    isGold={isGold}
                                />
                                <div className="space-y-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h2 className="text-base sm:text-lg font-extrabold tracking-wide text-white">
                                            {profile.cardName}
                                        </h2>
                                        <span
                                            className={`px-2 py-0.5 text-[10px] font-bold border ${isGold
                                                    ? 'bg-amber-500/15 border-amber-400/50 text-amber-300'
                                                    : 'bg-emerald-500/15 border-emerald-400/50 text-emerald-300'
                                                }`}
                                        >
                                            LVL.{profile.level}
                                        </span>
                                    </div>
                                    <div className="text-xs font-bold tracking-widest text-fuchsia-400">
                                        • {profile.cardClass}
                                    </div>
                                    <div className="text-[11px] text-slate-400">{profile.college}</div>
                                </div>
                            </div>

                            {/* XP Progress Bar */}
                            <div className="space-y-1.5 mb-5">
                                <div className="flex justify-between text-[10px] tracking-wider">
                                    <span className="text-slate-400">XP</span>
                                    <span className="text-slate-300">
                                        {xp} / {profile.maxXp}
                                    </span>
                                </div>
                                <div className="w-full h-2.5 bg-slate-800/90 rounded-sm overflow-hidden border border-white/10 p-0.5">
                                    <div
                                        className={`h-full transition-all duration-500 ${isGold
                                                ? 'bg-gradient-to-r from-amber-500 to-yellow-300 shadow-[0_0_10px_#f59e0b]'
                                                : 'bg-gradient-to-r from-lime-400 to-emerald-400 shadow-[0_0_10px_#84cc16]'
                                            }`}
                                        style={{ width: `${Math.min(100, (xp / profile.maxXp) * 100)}%` }}
                                    />
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 border border-white/10 rounded bg-black/40 divide-x divide-y divide-white/10 mb-5">
                                <div className="p-3">
                                    <div className="text-[9px] tracking-widest text-slate-400 uppercase">
                                        TOTAL EXPERIENCE
                                    </div>
                                    <div className={`text-sm sm:text-base font-extrabold mt-1 ${accentText}`}>
                                        {profile.totalExperience}
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="text-[9px] tracking-widest text-slate-400 uppercase">
                                        PROJECTS
                                    </div>
                                    <div className={`text-sm sm:text-base font-extrabold mt-1 ${accentText}`}>
                                        {profile.projectsCount}
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="text-[9px] tracking-widest text-slate-400 uppercase">
                                        XP EARNED
                                    </div>
                                    <div className={`text-sm sm:text-base font-extrabold mt-1 ${accentText}`}>
                                        {xp.toLocaleString()}
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="text-[9px] tracking-widest text-slate-400 uppercase">
                                        INTERNSHIPS
                                    </div>
                                    <div className="flex items-center justify-between mt-1">
                                        <span className={`text-sm sm:text-base font-extrabold ${accentText}`}>
                                            {profile.internshipsCount}
                                        </span>
                                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                                            OPEN
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-2 p-3 flex items-center justify-between">
                                    <div>
                                        <div className="text-[9px] tracking-widest text-slate-400 uppercase">
                                            GITHUB STREAK
                                        </div>
                                        <div className={`text-sm sm:text-base font-extrabold mt-0.5 ${accentText}`}>
                                            {profile.githubStreak}
                                        </div>
                                    </div>
                                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                                        🔥 Active Committer
                                    </span>
                                </div>
                            </div>

                            {/* Hidden HTML5 Audio Engine for Real MP3 & Lo-Fi Streams */}
                            <audio
                                ref={htmlAudioRef}
                                onTimeUpdate={() => {
                                    if (htmlAudioRef.current) {
                                        setAudioProgress(htmlAudioRef.current.currentTime);
                                        setAudioDuration(htmlAudioRef.current.duration || 0);
                                    }
                                }}
                                onEnded={handleNextTrack}
                            />

                            {/* MULTI-PLATFORM MUSIC & SPOTIFY / YOUTUBE / STREAM WIDGET */}
                            <div className="bg-[#111621] border border-white/10 rounded-lg p-3 space-y-2.5">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <button
                                            onClick={() => setShowMusicModal(true)}
                                            className={`w-10 h-10 rounded-lg bg-black/70 border border-white/15 flex flex-col items-center justify-center shrink-0 cursor-pointer hover:border-emerald-400 transition-all ${isPlaying ? 'text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.25)]' : 'text-slate-400'
                                                }`}
                                            title="Open Music & Spotify Playlist Manager"
                                        >
                                            <span className="text-sm leading-none">{currentTrack.cover || '🎵'}</span>
                                            <span className="text-[7px] font-extrabold tracking-tighter mt-0.5">
                                                {currentTrack.platform}
                                            </span>
                                        </button>

                                        <div className="min-w-0">
                                            <div className="text-[9px] font-bold tracking-widest uppercase text-emerald-400 flex items-center gap-1.5">
                                                <span>
                                                    {isPlaying ? `PLAYING • ${currentTrack.platform}` : `PAUSED • ${currentTrack.platform}`}
                                                </span>
                                                {isPlaying && (
                                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                                )}
                                            </div>
                                            <div
                                                onClick={() => setShowMusicModal(true)}
                                                className="text-xs font-bold text-white truncate hover:underline cursor-pointer"
                                                title="Click to switch song or connect Spotify / YouTube"
                                            >
                                                {currentTrack.title}
                                            </div>
                                            <div className="text-[10px] text-slate-400 truncate">
                                                {currentTrack.artist}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Playback Controls */}
                                    <div className="flex items-center gap-1 shrink-0">
                                        <button
                                            onClick={() => {
                                                if (
                                                    currentTrack.platform === 'SPOTIFY' ||
                                                    currentTrack.platform === 'YOUTUBE' ||
                                                    currentTrack.platform === 'SOUNDCLOUD'
                                                ) {
                                                    setShowEmbeddedDock(!showEmbeddedDock);
                                                    setIsPlaying(true);
                                                } else {
                                                    setIsPlaying(!isPlaying);
                                                }
                                                setHudContext(
                                                    !isPlaying
                                                        ? `AUDIO: PLAYING ${currentTrack.title.toUpperCase()}`
                                                        : 'AUDIO: PAUSED'
                                                );
                                            }}
                                            className={`w-8 h-8 rounded-full flex items-center justify-center border cursor-pointer transition-all ${isPlaying
                                                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                                                    : 'bg-white/5 border-white/15 text-slate-300 hover:text-white'
                                                }`}
                                            title={isPlaying ? 'Pause' : 'Play'}
                                        >
                                            {isPlaying ? (
                                                <Pause className="w-3.5 h-3.5" />
                                            ) : (
                                                <Play className="w-3.5 h-3.5 ml-0.5" />
                                            )}
                                        </button>

                                        <button
                                            onClick={handleNextTrack}
                                            className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer"
                                            title="Next Track in Playlist"
                                        >
                                            <SkipForward className="w-3.5 h-3.5" />
                                        </button>

                                        <button
                                            onClick={() => setIsMuted(!isMuted)}
                                            className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer"
                                            title={isMuted ? 'Unmute' : 'Mute'}
                                        >
                                            {isMuted ? (
                                                <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                                            ) : (
                                                <Volume2 className="w-3.5 h-3.5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Interactive Progress Scrubber (For Direct Streams) or Platform Embed Bar */}
                                {currentTrack.platform === 'STREAM' && (
                                    <div className="space-y-1">
                                        <input
                                            type="range"
                                            min={0}
                                            max={audioDuration || 100}
                                            value={audioProgress}
                                            onChange={(e) => {
                                                const newTime = Number(e.target.value);
                                                setAudioProgress(newTime);
                                                if (htmlAudioRef.current) {
                                                    htmlAudioRef.current.currentTime = newTime;
                                                }
                                            }}
                                            className="w-full h-1 accent-emerald-400 bg-slate-800 rounded-lg cursor-pointer"
                                        />
                                        <div className="flex justify-between text-[9px] text-slate-500">
                                            <span>{formatAudioTime(audioProgress)}</span>
                                            <span>{formatAudioTime(audioDuration)}</span>
                                        </div>
                                    </div>
                                )}

                                {/* Live Embedded Spotify / YouTube / SoundCloud Player Dock */}
                                {(currentTrack.platform === 'SPOTIFY' ||
                                    currentTrack.platform === 'YOUTUBE' ||
                                    currentTrack.platform === 'SOUNDCLOUD') &&
                                    showEmbeddedDock && (
                                        <div className="pt-1">
                                            <div className="rounded-lg overflow-hidden border border-white/10 bg-black">
                                                <iframe
                                                    src={currentTrack.embedUrl}
                                                    width="100%"
                                                    height={currentTrack.platform === 'SPOTIFY' ? '152' : '160'}
                                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                                    loading="lazy"
                                                    title={currentTrack.title}
                                                    className="w-full border-0"
                                                />
                                            </div>
                                        </div>
                                    )}

                                {/* Quick Platform Action Bar */}
                                <div className="flex items-center justify-between pt-1.5 border-t border-white/5 text-[10px]">
                                    <div className="flex items-center gap-1.5">
                                        <button
                                            onClick={() => {
                                                const spIdx = playlist.findIndex((t) => t.platform === 'SPOTIFY');
                                                if (spIdx !== -1) handleSelectTrack(spIdx);
                                                else setShowMusicModal(true);
                                            }}
                                            className={`px-2 py-0.5 rounded border cursor-pointer transition-colors ${currentTrack.platform === 'SPOTIFY'
                                                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                                                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                                                }`}
                                        >
                                            🟢 Spotify
                                        </button>
                                        <button
                                            onClick={() => {
                                                const ytIdx = playlist.findIndex((t) => t.platform === 'YOUTUBE');
                                                if (ytIdx !== -1) handleSelectTrack(ytIdx);
                                                else setShowMusicModal(true);
                                            }}
                                            className={`px-2 py-0.5 rounded border cursor-pointer transition-colors ${currentTrack.platform === 'YOUTUBE'
                                                    ? 'bg-rose-500/20 border-rose-400 text-rose-300 font-bold'
                                                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                                                }`}
                                        >
                                            🔴 YT Music
                                        </button>
                                        <button
                                            onClick={() => {
                                                const stIdx = playlist.findIndex((t) => t.platform === 'STREAM');
                                                if (stIdx !== -1) handleSelectTrack(stIdx);
                                            }}
                                            className={`px-2 py-0.5 rounded border cursor-pointer transition-colors ${currentTrack.platform === 'STREAM'
                                                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                                                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                                                }`}
                                        >
                                            🎧 Lo-Fi
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setShowMusicModal(true);
                                            setHudContext('MUSIC_HUB: CONNECT SPOTIFY / YOUTUBE / MP3');
                                        }}
                                        className={`font-bold hover:underline cursor-pointer ${accentText}`}
                                    >
                                        + Connect Song / Playlist ({playlist.length})
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================
            SECTION 2: "THE GRIND" (QUEST LOG VERTICAL TIMELINE)
        ======================================================================== */}
            <section id="experience" className="scroll-mt-20 space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 text-[11px] font-bold tracking-widest">
                        <Sword className="w-3.5 h-3.5" />
                        <span>QUEST LOG</span>
                    </div>
                    <h2 className="font-pixel text-2xl sm:text-4xl text-white">
                        The <span className={accentText}>Grind</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Level-up timeline &nbsp;|&nbsp;{' '}
                        <span className={accentText}>{quests.length} quests logged</span> • Click any quest to edit or remove
                    </p>

                    {/* The Grind Live Action Toolbar */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                        <button
                            onClick={openAddQuestModal}
                            className={`px-4 py-2 text-xs font-extrabold tracking-wider rounded border transition-all cursor-pointer flex items-center gap-1.5 ${isGold
                                    ? 'bg-amber-400 text-black border-amber-400 hover:bg-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                                    : 'bg-[#84cc16] text-black border-[#84cc16] hover:bg-lime-300 shadow-[0_0_15px_rgba(132,204,22,0.3)]'
                                }`}
                        >
                            <span>+ ADD NEW QUEST / GRIND</span>
                        </button>

                        <button
                            onClick={() => {
                                setEditingQuestId(null);
                                setShowQuestModal(true);
                                triggerHudToast('QUEST_FORGE: MANAGE ALL GRIND QUESTS');
                            }}
                            className="px-3.5 py-2 text-xs font-bold tracking-wider rounded border border-white/15 bg-[#121722] text-slate-300 hover:text-white hover:border-white/30 cursor-pointer transition-colors"
                        >
                            ⚙ MANAGE THE GRIND ({quests.length})
                        </button>
                    </div>
                </div>

                {/* Precision-Aligned Vertical Timeline Container */}
                <div className="relative max-w-5xl mx-auto pt-4">
                    {/* Continuous Vertical Timeline Axis (Left-aligned on Mobile, Centered on Desktop) */}
                    <div
                        className={`absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 ${isGold
                                ? 'bg-gradient-to-b from-amber-400 via-amber-500/40 to-amber-500/10'
                                : 'bg-gradient-to-b from-emerald-400 via-emerald-500/40 to-emerald-500/10'
                            }`}
                    />

                    <div className="space-y-12">
                        {quests.map((q, idx) => {
                            // Always alternate left/right systematically by index
                            const isLeft = idx % 2 === 0;
                            return (
                                <div
                                    key={q.id}
                                    onClick={() => triggerHudToast(q.hudToast)}
                                    className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                                >
                                    {/* LEFT COLUMN (Desktop Left Card or Empty Spacer) */}
                                    <div
                                        className={`w-full md:w-1/2 pl-14 md:pl-0 ${isLeft
                                                ? 'md:pr-12'
                                                : 'hidden md:block md:pr-12 pointer-events-none'
                                            }`}
                                    >
                                        {isLeft && (
                                            <QuestCard
                                                quest={q}
                                                align="right"
                                                isGold={isGold}
                                                accentText={accentText}
                                                onEdit={() => openEditQuestModal(q)}
                                                onDelete={() => handleDeleteQuest(q.id, q.title)}
                                            />
                                        )}
                                    </div>

                                    {/* CENTER TIMELINE NODE + HORIZONTAL CONNECTOR TICK */}
                                    <div className="absolute left-5 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                                        {/* Small glowing dot above node (matches Screenshot 3/5) */}
                                        <span
                                            className={`hidden md:block absolute -top-6 w-1.5 h-1.5 rounded-full ${isGold ? 'bg-amber-400' : 'bg-emerald-400'
                                                }`}
                                        />

                                        {/* Horizontal Connector Branch to Active Card */}
                                        <span
                                            className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1.5px] w-7 ${isLeft ? 'right-full' : 'left-full'
                                                } ${isGold ? 'bg-amber-400/50' : 'bg-emerald-400/50'}`}
                                        />

                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openEditQuestModal(q);
                                            }}
                                            title="Click to edit this Quest"
                                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-extrabold text-xs border-2 transition-transform hover:scale-110 cursor-pointer ${q.isFuture
                                                    ? 'bg-[#0b0f17] border-amber-500/50 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                                                    : isGold
                                                        ? 'bg-white text-black border-amber-400 shadow-[0_0_22px_#f59e0b]'
                                                        : 'bg-white text-black border-emerald-400 shadow-[0_0_22px_#22c55e]'
                                                }`}
                                        >
                                            {q.badgeText}
                                        </button>
                                    </div>

                                    {/* RIGHT COLUMN (Desktop Right Card or Mobile Fallback for Right Cards) */}
                                    <div
                                        className={`w-full md:w-1/2 pl-14 ${!isLeft
                                                ? 'md:pl-12'
                                                : 'hidden md:block md:pl-12 pointer-events-none'
                                            }`}
                                    >
                                        {!isLeft && (
                                            <QuestCard
                                                quest={q}
                                                align="left"
                                                isGold={isGold}
                                                accentText={accentText}
                                                onEdit={() => openEditQuestModal(q)}
                                                onDelete={() => handleDeleteQuest(q.id, q.title)}
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ========================================================================
            SECTION 3: "SKILL DECK" (4-COLUMN RPG CARD GRID)
        ======================================================================== */}
            <section id="skills" className="scroll-mt-20 space-y-10">
                <div className="flex items-center justify-between text-[11px] tracking-[0.2em] text-slate-500">
                    <span>SEC_01</span>
                    <div className="flex-1 mx-4 border-t border-dashed border-amber-500/30" />
                    <span className={accentText}>// SKILL_DECK ({skills.length} EQUIPPED) //</span>
                    <div className="flex-1 mx-4 border-t border-dashed border-amber-500/30" />
                    <span>
                        {skills.length > 0
                            ? `${Math.round(
                                skills.reduce((acc, s) => acc + Number(s.score || 0), 0) / skills.length
                            )}% AVG`
                            : '0%'}
                    </span>
                </div>

                <div className="text-center space-y-4">
                    <h2 className="font-pixel text-2xl sm:text-4xl text-white">
                        <span className={accentText}>Skill</span> Deck
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Hover to reveal pixel glow • Click any card to edit or equip new skills anytime
                    </p>

                    {/* Skill Deck Action Toolbar */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                        <button
                            onClick={openAddSkillModal}
                            className={`px-4 py-2 text-xs font-extrabold tracking-wider rounded border transition-all cursor-pointer flex items-center gap-1.5 ${isGold
                                    ? 'bg-amber-400 text-black border-amber-400 hover:bg-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                                    : 'bg-[#84cc16] text-black border-[#84cc16] hover:bg-lime-300 shadow-[0_0_15px_rgba(132,204,22,0.3)]'
                                }`}
                        >
                            <span>+ EQUIP NEW SKILL</span>
                        </button>

                        <button
                            onClick={() => {
                                setEditingSkillId(null);
                                setShowSkillModal(true);
                                setHudContext('SKILL_DECK: MANAGE ALL EQUIPPED SKILLS');
                            }}
                            className="px-3.5 py-2 text-xs font-bold tracking-wider rounded border border-white/15 bg-[#121722] text-slate-300 hover:text-white hover:border-white/30 cursor-pointer transition-colors"
                        >
                            ⚙ MANAGE DECK ({skills.length})
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {skills.map((skill) => {
                        const IconComponent = SKILL_ICON_MAP[skill.iconName] || Zap;
                        const filledBlocks = Math.round((skill.score / 100) * 20);
                        const isGoldTier = skill.tier === 'GOLD';
                        const isBronzeTier = skill.tier === 'BRONZE';

                        return (
                            <div
                                key={skill.id || skill.name}
                                onClick={() => openEditSkillModal(skill)}
                                onMouseEnter={() =>
                                    setHudContext(
                                        `SKILL: ${skill.name.toUpperCase()} (${skill.score}/100) — CLICK TO EDIT`
                                    )
                                }
                                className={`group relative bg-[#0e1218]/90 backdrop-blur-md border border-white/10 rounded-lg p-5 transition-all duration-300 cursor-pointer ${isGold
                                        ? 'hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]'
                                        : 'hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-5">
                                    <div
                                        className={`w-10 h-10 rounded border flex items-center justify-center transition-colors ${isGold
                                                ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover:border-amber-400'
                                                : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 group-hover:border-emerald-400'
                                            }`}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-slate-200">
                                            EDIT
                                        </span>
                                        <span
                                            className={`px-2.5 py-0.5 text-[10px] font-bold tracking-wider rounded border ${isGoldTier
                                                    ? 'border-amber-400/60 bg-amber-500/10 text-amber-300'
                                                    : isBronzeTier
                                                        ? 'border-orange-500/50 bg-orange-500/10 text-orange-300'
                                                        : 'border-slate-400/50 bg-slate-500/10 text-slate-300'
                                                }`}
                                        >
                                            {isGoldTier ? '☆ GOLD' : isBronzeTier ? '🥉 BRONZE' : '🛡️ SILVER'}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-base font-extrabold text-white mb-2">{skill.name}</h3>

                                <div className="flex items-center justify-between text-[10px] tracking-wider mb-1.5">
                                    <span className="text-slate-500">PWR</span>
                                    <span className={isGoldTier ? accentText : 'text-slate-300'}>
                                        {skill.score}/100
                                    </span>
                                </div>

                                <div className="grid grid-cols-20 gap-0.5 h-2.5 bg-black/60 p-0.5 rounded border border-white/10 mb-3">
                                    {Array.from({ length: 20 }).map((_, idx) => {
                                        const active = idx < filledBlocks;
                                        return (
                                            <div
                                                key={idx}
                                                className={`h-full rounded-[1px] transition-all ${active
                                                        ? isGoldTier
                                                            ? isGold
                                                                ? 'bg-amber-400 shadow-[0_0_4px_#f59e0b]'
                                                                : 'bg-lime-400 shadow-[0_0_4px_#84cc16]'
                                                            : isBronzeTier
                                                                ? 'bg-orange-400'
                                                                : 'bg-slate-300'
                                                        : 'bg-slate-800'
                                                    }`}
                                            />
                                        );
                                    })}
                                </div>

                                <p className="text-[11px] text-slate-400 line-clamp-1">{skill.desc}</p>
                            </div>
                        );
                    })}

                    {/* Add New Skill Card Slot directly in the grid */}
                    <button
                        onClick={openAddSkillModal}
                        onMouseEnter={() => setHudContext('ACTION: ADD A NEW SKILL CARD TO DECK')}
                        className={`min-h-[178px] rounded-lg border-2 border-dashed border-white/15 hover:border-amber-400/60 bg-[#0b0f16]/60 hover:bg-[#101622] p-5 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer group`}
                    >
                        <div
                            className={`w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-lg font-bold transition-transform group-hover:scale-110 ${accentText}`}
                        >
                            +
                        </div>
                        <div className="text-xs font-extrabold text-white tracking-wider">
                            + EQUIP NEW SKILL
                        </div>
                        <div className="text-[10px] text-slate-500 text-center">
                            Add language, framework, or tool to your RPG deck
                        </div>
                    </button>
                </div>
            </section>

            {/* ========================================================================
            SECTION 4: "FEATURED PROJECTS" (BROWSER MOCKUP CARDS)
        ======================================================================== */}
            <section id="projects" className="scroll-mt-20 space-y-10">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                        Featured <span className={accentText}>Projects</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Live deployments &amp; repositories • Add, edit, or remove projects anytime
                    </p>

                    {/* Featured Projects Action Toolbar */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                        <button
                            onClick={openAddProjectModal}
                            className={`px-4 py-2 text-xs font-extrabold tracking-wider rounded border transition-all cursor-pointer flex items-center gap-1.5 ${isGold
                                    ? 'bg-amber-400 text-black border-amber-400 hover:bg-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                                    : 'bg-[#84cc16] text-black border-[#84cc16] hover:bg-lime-300 shadow-[0_0_15px_rgba(132,204,22,0.3)]'
                                }`}
                        >
                            <span>+ ADD NEW PROJECT</span>
                        </button>

                        <button
                            onClick={() => {
                                setEditingProjectId(null);
                                setShowProjectEditorModal(true);
                                triggerHudToast('PROJECT_FORGE: MANAGE ALL PROJECTS');
                            }}
                            className="px-3.5 py-2 text-xs font-bold tracking-wider rounded border border-white/15 bg-[#121722] text-slate-300 hover:text-white hover:border-white/30 cursor-pointer transition-colors"
                        >
                            ⚙ MANAGE PROJECTS ({projects.length})
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                        {['ALL', 'WEB APPS', 'C++ & SYSTEMS', 'UI/UX'].map((tab) => {
                            const active = projectFilter === tab;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => {
                                        setProjectFilter(tab);
                                        triggerHudToast(`FILTER: ${tab} PROJECTS`);
                                    }}
                                    className={`px-4 py-1.5 text-xs font-bold tracking-wider rounded border transition-all cursor-pointer ${active
                                            ? isGold
                                                ? 'bg-amber-400 text-black border-amber-400'
                                                : 'bg-[#84cc16] text-black border-[#84cc16]'
                                            : 'bg-[#0f141c] text-slate-400 border-white/10 hover:text-white'
                                        }`}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((proj) => (
                        <div
                            key={proj.id}
                            onClick={() => triggerHudToast(proj.hudToast)}
                            className="group bg-[#0e1218]/95 border border-white/10 hover:border-amber-400/60 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                        >
                            <div>
                                <div className="px-3.5 py-2.5 bg-[#161b24] border-b border-white/10 flex items-center gap-2">
                                    <div className="flex items-center gap-1.5 shrink-0">
                                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                                    </div>
                                    <div className="flex-1 bg-[#222936] text-slate-300 text-[11px] px-2.5 py-1 rounded text-center truncate">
                                        {proj.url}
                                    </div>
                                    {/* Quick Edit & Delete Buttons in Browser Header */}
                                    <div className="flex items-center gap-1 shrink-0">
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openEditProjectModal(proj);
                                            }}
                                            className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-white/10 hover:bg-amber-400 hover:text-black text-slate-300 transition-colors cursor-pointer"
                                            title="Edit Project"
                                        >
                                            EDIT
                                        </button>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteProject(proj.id, proj.title);
                                            }}
                                            className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-rose-500/15 hover:bg-rose-500 hover:text-white text-rose-300 transition-colors cursor-pointer"
                                            title="Delete Project"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>

                                <div
                                    className={`relative h-44 bg-gradient-to-br ${proj.accent} p-4 flex flex-col justify-between overflow-hidden border-b border-white/10`}
                                >
                                    <ProjectPreviewArt type={proj.previewType} title={proj.title} />

                                    <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => setSelectedProject(proj)}
                                            className="px-3.5 py-2 bg-black/90 border border-white/30 text-white text-xs font-bold tracking-widest rounded hover:border-amber-400 hover:text-amber-300 cursor-pointer"
                                        >
                                            VIEW DETAILS
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openEditProjectModal(proj);
                                            }}
                                            className="px-3 py-2 bg-amber-400 text-black text-xs font-extrabold tracking-wider rounded hover:bg-amber-300 cursor-pointer"
                                        >
                                            ⚙ EDIT
                                        </button>
                                    </div>
                                </div>

                                <div className="p-5 space-y-2.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className={`text-lg font-extrabold ${accentText}`}>
                                            {proj.title}
                                        </h3>
                                        <a
                                            href={proj.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-slate-400 hover:text-white transition-colors"
                                            title="Open Project URL"
                                        >
                                            <Globe className="w-4 h-4" />
                                        </a>
                                    </div>
                                    <p className="text-xs text-slate-300 leading-relaxed">{proj.desc}</p>
                                </div>
                            </div>

                            <div className="px-5 pb-5 pt-2 flex flex-wrap gap-1.5">
                                {proj.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2.5 py-1 text-[10px] font-semibold bg-[#151b26] border border-white/10 text-slate-300 rounded"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Add New Project Card Slot directly in the grid */}
                    <button
                        onClick={openAddProjectModal}
                        className="min-h-[340px] rounded-xl border-2 border-dashed border-white/15 hover:border-amber-400/60 bg-[#0b0f16]/60 hover:bg-[#101622] p-6 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer group"
                    >
                        <div
                            className={`w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-xl font-bold transition-transform group-hover:scale-110 ${accentText}`}
                        >
                            +
                        </div>
                        <div className="text-sm font-extrabold text-white tracking-wider">
                            + ADD NEW FEATURED PROJECT
                        </div>
                        <div className="text-xs text-slate-500 text-center max-w-[220px]">
                            Add any new Vercel deployment, GitHub repo, or C++ system to your showcase
                        </div>
                    </button>
                </div>
            </section>

            {/* ========================================================================
            SECTION 5: ACHIEVEMENTS & TROPHY CABINET (4x2 GRID)
        ======================================================================== */}
            <section id="achievements" className="scroll-mt-20 space-y-10">
                <div className="text-center space-y-3">
                    <div className="text-[11px] tracking-[0.25em] text-slate-400 uppercase">
                        TROPHY_CABINET // UNLOCKED
                    </div>
                    <h2 className="font-pixel text-2xl sm:text-4xl text-white">
                        unlocked <span className={accentText}>Trophies</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {achievements.map((item) => {
                        const IconComp = item.icon;
                        return (
                            <div
                                key={item.title}
                                onClick={() => triggerHudToast(item.hudToast)}
                                className={`bg-[#0d1118]/95 rounded-xl p-5 flex flex-col justify-between border transition-all duration-300 ${item.highlighted
                                        ? isGold
                                            ? 'border-amber-400/70 shadow-[0_0_25px_rgba(245,158,11,0.15)]'
                                            : 'border-emerald-400/70 shadow-[0_0_25px_rgba(34,197,94,0.15)]'
                                        : 'border-white/15 hover:border-amber-400/50'
                                    }`}
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-2 mb-5">
                                        <div className="w-10 h-10 rounded-lg bg-[#161c28] border border-white/10 flex items-center justify-center text-amber-400">
                                            <IconComp className="w-5 h-5" />
                                        </div>
                                        <div className="px-3 py-1.5 rounded-lg bg-[#161b24] border border-white/10 text-right">
                                            <div className="text-[9px] tracking-widest text-slate-400 uppercase">
                                                {item.metricLabel}
                                            </div>
                                            <div className={`text-xs font-extrabold ${item.metricColor}`}>
                                                {item.metricVal}
                                            </div>
                                        </div>
                                    </div>

                                    <h3
                                        className={`text-base font-extrabold mb-2 ${item.highlighted ? accentText : 'text-white'
                                            }`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
                                    <a
                                        href={item.linkUrl}
                                        target={item.linkUrl.startsWith('http') ? '_blank' : '_self'}
                                        rel="noreferrer"
                                        className={`font-bold hover:underline ${accentText}`}
                                    >
                                        {item.linkText}
                                    </a>
                                    <span className="text-[11px] text-slate-500">{item.year}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================================================
            SECTION 6: INDRARAJ'S GITHUB CONTRIBUTION SNAKE (FROM GITHUB.COM/INDRAJTHAKUR/INDRAJTHAKUR)
        ======================================================================== */}
            <section className="space-y-8">
                <div className="max-w-4xl mx-auto space-y-2">
                    <div className="text-xs tracking-[0.25em] text-emerald-400 uppercase">
                        SOURCE_CODE // GITHUB.COM/INDRAJTHAKUR/INDRAJTHAKUR
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                        Contribution <span className="text-emerald-400">Snake</span>
                    </h2>
                </div>

                <div
                    onMouseEnter={() =>
                        setHudContext('GITHUB SNAKE: GITHUB.COM/INDRAJTHAKUR/INDRAJTHAKUR')
                    }
                    className="max-w-4xl mx-auto bg-[#0d1118]/95 border border-emerald-500/30 rounded-xl p-6 sm:p-8 shadow-2xl space-y-5"
                >
                    {/* Top Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                                <span>@Indrajthakur&apos;s Eat-My-Contributions Snake</span>
                            </div>
                            <div className="text-xs text-slate-400">
                                Live from{' '}
                                <a
                                    href="https://github.com/Indrajthakur/Indrajthakur"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-emerald-400 hover:underline"
                                >
                                    Indrajthakur/Indrajthakur
                                </a>{' '}
                                • Streak: <span className="text-amber-400 font-bold">{profile.githubStreak}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <a
                                href="https://github.com/Indrajthakur/Indrajthakur"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3.5 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-300 flex items-center gap-1.5 transition-colors"
                            >
                                <GitBranch className="w-3.5 h-3.5" />
                                <span>Snake Repo</span>
                            </a>
                            <a
                                href="https://github.com/Indrajthakur"
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-lg bg-[#171d28] hover:bg-[#202938] border border-white/15 text-xs font-semibold text-white flex items-center gap-2 transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                <span>View Profile</span>
                            </a>
                        </div>
                    </div>

                    {/* Live GitHub Action Contribution Snake SVG (with Animated Custom Snake Fallback) */}
                    <div className="relative bg-[#070a0f] border border-white/10 rounded-lg p-4 overflow-x-auto">
                        {!snakeImgError ? (
                            <img
                                src={snakeSvgUrls[snakeBranchIdx]}
                                alt="Indraraj Thakur's GitHub Contribution Snake"
                                className="w-full min-w-[640px] h-auto mx-auto select-none"
                                onError={() => {
                                    if (snakeBranchIdx < snakeSvgUrls.length - 1) {
                                        setSnakeBranchIdx((prev) => prev + 1);
                                    } else {
                                        setSnakeImgError(true);
                                    }
                                }}
                            />
                        ) : (
                            <div className="space-y-3">
                                {/* Months Header */}
                                <div className="grid grid-cols-12 text-[11px] text-slate-400 px-1 min-w-[640px]">
                                    {[
                                        'Dec',
                                        'Jan',
                                        'Feb',
                                        'Mar',
                                        'Apr',
                                        'May',
                                        'Jun',
                                        'Jul',
                                        'Aug',
                                        'Sep',
                                        'Oct',
                                        'Nov'
                                    ].map((m) => (
                                        <span key={m}>{m}</span>
                                    ))}
                                </div>

                                {/* Animated Contribution Grid + Live SVG Snake Path for @Indrajthakur */}
                                <div className="relative min-w-[640px]">
                                    <div className="inline-flex gap-1 min-w-full">
                                        {githubGrid.map((week, wIdx) => (
                                            <div key={wIdx} className="flex flex-col gap-1 flex-1">
                                                {week.map((day, dIdx) => {
                                                    const bgMap = [
                                                        'bg-[#161b22]',
                                                        'bg-[#0e4429]',
                                                        'bg-[#006d32]',
                                                        'bg-[#26a641]',
                                                        'bg-[#39d353]'
                                                    ];
                                                    return (
                                                        <div
                                                            key={dIdx}
                                                            title={`@Indrajthakur: ${day.commits} contributions`}
                                                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] ${bgMap[day.level]} transition-all`}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Animated Neon Snake Eating Contributions Overlay */}
                                    <svg
                                        viewBox="0 0 700 98"
                                        className="absolute inset-0 w-full h-full pointer-events-none"
                                    >
                                        <style>{`
                        @keyframes snakeSlither {
                          0% { stroke-dashoffset: 1400; }
                          50% { stroke-dashoffset: 0; }
                          100% { stroke-dashoffset: -1400; }
                        }
                        .indraraj-snake-path {
                          stroke-dasharray: 130 1270;
                          animation: snakeSlither 9s linear infinite;
                        }
                      `}</style>
                                        <path
                                            d="M 10 15 L 180 15 L 180 48 L 340 48 L 340 22 L 510 22 L 510 75 L 680 75 L 680 35 L 420 35 L 420 82 L 120 82 L 120 15 Z"
                                            fill="none"
                                            stroke={isGold ? '#f59e0b' : '#39d353'}
                                            strokeWidth="6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="indraraj-snake-path drop-shadow-[0_0_8px_rgba(57,211,83,0.9)]"
                                        />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Legend & Repo Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 pt-2 border-t border-white/5">
                        <span>
                            Generated from{' '}
                            <code className="text-emerald-300">github.com/Indrajthakur/Indrajthakur</code>
                        </span>
                        <div className="flex items-center gap-1.5">
                            <span>Less</span>
                            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#161b22] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353] inline-block" />
                            <span>More</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================
            SECTION 7: CONTACT FORM & DIRECT VERIFIED CHANNELS (OLD PIXEL AVATAR REMOVED)
        ======================================================================== */}
            <section id="contact" className="scroll-mt-20 space-y-12">
                {/* HUD Section Divider */}
                <div className="flex items-center justify-between text-[11px] tracking-[0.2em] text-slate-500">
                    <span>SEC_06</span>
                    <div className="flex-1 mx-4 border-t border-dashed border-amber-500/30" />
                    <span className={accentText}>// CONTACT //</span>
                    <div className="flex-1 mx-4 border-t border-dashed border-amber-500/30" />
                    <span>100%</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Indraraj's Profile Identity Card + Direct Verified Contact Channels */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
                        <div className="w-full bg-[#0d121a]/95 border border-white/10 rounded-xl p-6 space-y-5 shadow-xl">
                            {/* Profile Header inside Contact Card */}
                            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                                <IndrarajProfileAvatar
                                    customUrl={profile.customAvatarUrl}
                                    sizeClass="w-16 h-16"
                                    isGold={isGold}
                                />
                                <div>
                                    <div className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                                        ● AVAILABLE FOR OPPORTUNITIES
                                    </div>
                                    <h3 className="text-base font-extrabold text-white">{profile.fullName}</h3>
                                    <p className="text-xs text-slate-400">{profile.educationShort}</p>
                                </div>
                            </div>

                            {/* Verified Direct Comms List */}
                            <div className="space-y-3 text-xs">
                                <div className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase">
                                    DIRECT_COMMS // VERIFIED CHANNELS
                                </div>
                                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                                    <span className="text-slate-400">Email:</span>
                                    <a
                                        href={`mailto:${profile.email}`}
                                        className={`font-semibold hover:underline ${accentText}`}
                                    >
                                        {profile.email}
                                    </a>
                                </div>
                                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                                    <span className="text-slate-400">Phone / WhatsApp:</span>
                                    <a
                                        href={`tel:${profile.phoneRaw}`}
                                        className="font-semibold text-white hover:underline"
                                    >
                                        {profile.phone}
                                    </a>
                                </div>
                                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                                    <span className="text-slate-400">Location:</span>
                                    <span className="text-slate-200">{profile.location}</span>
                                </div>
                                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                                    <span className="text-slate-400">GitHub:</span>
                                    <a
                                        href={profile.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-slate-200 hover:text-white hover:underline"
                                    >
                                        {profile.githubHandle}
                                    </a>
                                </div>
                                <div className="flex items-center justify-between pt-2 gap-2">
                                    <a
                                        href={`mailto:${profile.email}?subject=Internship%20/%20Project%20Opportunity%20for%20Indraraj`}
                                        className="flex-1 text-center px-3 py-2 rounded bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-[11px] font-bold hover:bg-emerald-500/25 transition-colors"
                                    >
                                        ✉ One-Click Email
                                    </a>
                                    <a
                                        href={`https://wa.me/${profile.phoneRaw.replace('+', '')}?text=Hi%20Indraraj,%20I%20visited%20your%20RPG%20portfolio!`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 text-center px-3 py-2 rounded bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] font-bold hover:bg-amber-500/25 transition-colors"
                                    >
                                        💬 WhatsApp Direct
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dark HUD Contact Form */}
                    <div className="lg:col-span-7">
                        <form onSubmit={handleContactSubmit} className="space-y-4">
                            <div>
                                <label className={`block text-xs font-bold mb-1.5 ${accentText}`}>Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="your name"
                                    value={contactForm.name}
                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                    className="w-full bg-[#11141a]/95 border border-white/15 rounded-md px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                                />
                            </div>

                            <div>
                                <label className={`block text-xs font-bold mb-1.5 ${accentText}`}>Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="name@example.com"
                                    value={contactForm.email}
                                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                    className="w-full bg-[#11141a]/95 border border-white/15 rounded-md px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                                />
                            </div>

                            <div>
                                <label className={`block text-xs font-bold mb-1.5 ${accentText}`}>Subject</label>
                                <input
                                    type="text"
                                    value={contactForm.subject}
                                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                                    className="w-full bg-[#11141a]/95 border border-white/15 rounded-md px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                                />
                            </div>

                            <div>
                                <label className={`block text-xs font-bold mb-1.5 ${accentText}`}>Message</label>
                                <textarea
                                    rows={4}
                                    required
                                    placeholder="Tell me about your project, internship opportunity, or collaboration..."
                                    value={contactForm.message}
                                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                    className="w-full bg-[#11141a]/95 border border-white/15 rounded-md px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                                />
                            </div>

                            {/* Simulated Cloudflare Verification Badge (Matches Screenshot 9/10) */}
                            <div className="inline-flex items-center justify-between gap-8 bg-[#1a1d24] border border-white/20 px-4 py-3 rounded w-72">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold">
                                        ✓
                                    </div>
                                    <span className="text-xs font-semibold text-white">Success!</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-[9px] font-bold tracking-wider text-amber-400">
                                        CLOUDFLARE
                                    </div>
                                    <div className="text-[8px] text-slate-400">Privacy • Terms</div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className={`w-full py-3.5 rounded-md bg-[#121316] border font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${isGold
                                            ? 'border-amber-500/40 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400'
                                            : 'border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400'
                                        }`}
                                >
                                    <Rocket className="w-4 h-4" />
                                    <span>SEND MESSAGE</span>
                                </button>
                            </div>

                            {formSubmitted && (
                                <div className="p-3 rounded bg-emerald-500/15 border border-emerald-400/50 text-emerald-300 text-xs flex items-center justify-between">
                                    <span>
                                        ✓ Transmission received! Indraraj will reply to your message soon.
                                    </span>
                                    <span className="font-bold">+180 XP</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </main>

        {/* ==========================================================================
          FOOTER (MATCHES SCREENSHOT 10)
      ========================================================================== */}
        <footer className="relative z-10 border-t border-white/10 bg-[#05070b]/90 py-10 px-4 text-center space-y-5">
            <div className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
                <span>Built with</span>
                <span className={accentText}>⚡</span>
                <span>and</span>
                <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
                    <Coffee className="w-3.5 h-3.5" />
                    <span>lots of coffee</span>
                </span>
            </div>

            {/* Social Links Row (100% Real Verified URLs) */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
                <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                    <Github className="w-4 h-4" />
                    <span>GitHub ({profile.githubHandle})</span>
                </a>
                <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                </a>
                <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>{profile.email}</span>
                </a>
                <a
                    href={`tel:${profile.phoneRaw}`}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                    <span>📞 {profile.phone}</span>
                </a>
                <a
                    href={profile.livePortfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                    <Globe className="w-4 h-4 text-amber-400" />
                    <span>Live Vercel</span>
                </a>
            </div>

            <div className="space-y-1 text-[11px] text-slate-500">
                <div>© 2026 {profile.fullName}. All rights reserved.</div>
                <div>
                    {profile.location} • {profile.college} ⚙
                </div>
            </div>

            {/* Live Visitor Counter Badge */}
            <div className="pt-1">
                <button
                    onClick={() => setVisitors((v) => v + 1)}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-400 hover:text-white cursor-pointer"
                    title="Click to high-five visitor counter"
                >
                    <span className={`w-2 h-2 rounded-full ${accentBg}`} />
                    <span>{visitors} visitors</span>
                </button>
            </div>
        </footer>

        {/* ==========================================================================
          FLOATING BOTTOM-RIGHT HUD THEME TOGGLE BUTTON (GOLD RPG <-> NEON EMERALD)
      ========================================================================== */}
        <button
            onClick={() => {
                const next = isGold ? 'emerald' : 'gold';
                setTheme(next);
                setHudContext(
                    next === 'gold'
                        ? 'THEME: RETRO GOLD RPG MODE'
                        : 'THEME: NEON EMERALD HUD MODE'
                );
            }}
            className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer ${isGold
                    ? 'bg-amber-950/90 border-amber-400 text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.5)]'
                    : 'bg-emerald-950/90 border-emerald-400 text-emerald-300 shadow-[0_0_25px_rgba(34,197,94,0.5)]'
                } hover:scale-110`}
            title="Switch HUD Color Theme (Neon Emerald <-> Retro Gold)"
        >
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-rose-500 border border-black" />
            <Sun className="w-5 h-5" />
        </button>

        {/* ==========================================================================
          MODAL 1: PROJECT DETAILS INSPECTION MODAL
      ========================================================================== */}
        {selectedProject && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-[#0d121a] border border-amber-400/50 rounded-xl max-w-lg w-full p-6 space-y-4 relative shadow-2xl">
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="text-[10px] tracking-widest text-amber-400 font-bold uppercase">
                        PROJECT_INSPECTOR // {selectedProject.category}
                    </div>
                    <h3 className="text-xl font-extrabold text-white">{selectedProject.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {selectedProject.desc}
                    </p>

                    <div className="bg-black/50 border border-white/10 rounded p-3 space-y-1.5">
                        <div className="text-[10px] tracking-widest text-slate-400">KEY CAPABILITIES</div>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.metrics.map((m) => (
                                <span
                                    key={m}
                                    className="px-2.5 py-1 text-xs rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                                >
                                    ✓ {m}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((t) => (
                            <span
                                key={t}
                                className="px-2.5 py-1 text-[11px] bg-[#161e2b] border border-white/10 text-slate-300 rounded"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="pt-3 flex items-center justify-end gap-3 border-t border-white/10">
                        <a
                            href={selectedProject.repoLink}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 text-xs font-bold border border-white/20 rounded text-slate-200 hover:bg-white/10 flex items-center gap-1.5"
                        >
                            <Github className="w-3.5 h-3.5" />
                            <span>SOURCE CODE</span>
                        </a>
                        <a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className={`px-4 py-2 text-xs font-extrabold rounded text-black flex items-center gap-1.5 ${isGold ? 'bg-amber-400 hover:bg-amber-300' : 'bg-[#84cc16] hover:bg-lime-300'
                                }`}
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>OPEN DEPLOYMENT</span>
                        </a>
                    </div>
                </div>
            </div>
        )}

        {/* ==========================================================================
          MODAL 2: VERIFIED PRINTABLE / ATS SAVE FILE (RESUME.PDF)
      ========================================================================== */}
        {showResumeModal && (
            <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-[#0b1018] border border-cyan-400/60 rounded-xl max-w-2xl w-full p-6 space-y-5 relative shadow-2xl my-8">
                    <button
                        onClick={() => setShowResumeModal(false)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex items-center justify-between pr-8">
                        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest">
                            <Download className="w-4 h-4" />
                            <span>PLAYER_SAVE_FILE // VERIFIED_RESUME.PDF</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                            ATS &amp; PRINT READY
                        </span>
                    </div>

                    {/* Printable Resume Sheet */}
                    <div
                        id="printable-resume"
                        className="border border-white/15 bg-[#070a0f] p-5 rounded-lg space-y-4 text-xs"
                    >
                        <div className="flex flex-wrap justify-between items-start gap-3 border-b border-white/10 pb-3">
                            <div>
                                <h3 className="text-lg font-extrabold text-white tracking-wide">
                                    {profile.fullName.toUpperCase()}
                                </h3>
                                <p className={accentText}>
                                    Full-Stack Developer (Next.js • React • TypeScript • C++ &amp; OOP)
                                </p>
                                <p className="text-[11px] text-slate-400 mt-0.5">{profile.location}</p>
                            </div>
                            <div className="text-left sm:text-right text-[11px] text-slate-300 space-y-0.5">
                                <div>
                                    <a href={`mailto:${profile.email}`} className="hover:underline text-cyan-300">
                                        {profile.email}
                                    </a>
                                </div>
                                <div>{profile.phone}</div>
                                <div>
                                    <a
                                        href={profile.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:underline text-amber-300"
                                    >
                                        github.com/Indrajthakur
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href={profile.linkedinUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:underline text-sky-300"
                                    >
                                        linkedin.com/in/{profile.linkedinHandle}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="space-y-1.5">
                            <div className="text-amber-400 font-bold tracking-wider uppercase text-[11px]">
                                EDUCATION
                            </div>
                            <div className="flex justify-between text-white font-semibold">
                                <span>{profile.degree}</span>
                                <span className="text-slate-400">2024 – 2028</span>
                            </div>
                            <div className="text-slate-300">{profile.college}</div>
                            <div className="text-[11px] text-slate-400">
                                Coursework: Object-Oriented Programming in C++, Data Structures, Digital Systems,
                                Engineering Mathematics III
                            </div>
                            <div className="flex justify-between text-slate-300 pt-1">
                                <span>High School Education — {profile.school}</span>
                                <span className="text-slate-400">Completed 2024</span>
                            </div>
                        </div>

                        {/* Projects */}
                        <div className="space-y-1.5">
                            <div className="text-amber-400 font-bold tracking-wider uppercase text-[11px]">
                                FEATURED ENGINEERING PROJECTS
                            </div>
                            <ul className="list-disc list-inside text-slate-300 space-y-1.5">
                                <li>
                                    <strong className="text-white">
                                        Cravora — Food &amp; Culinary Platform (cravora-inky.vercel.app):
                                    </strong>{' '}
                                    Responsive food discovery and ordering web app with dynamic menu filtering and
                                    cart management (github.com/Indrajthakur/Cravora).
                                </li>
                                <li>
                                    <strong className="text-white">StudyFlow (Student Productivity Suite):</strong>{' '}
                                    Full-stack academic planner, Pomodoro study timer, and subject tracker built
                                    with Next.js, React, Tailwind CSS, and Node.js.
                                </li>
                                <li>
                                    <strong className="text-white">
                                        Task Manager App (github.com/Indrajthakur/Task-manager-app):
                                    </strong>{' '}
                                    Responsive workflow manager featuring priority filtering, status tracking, and
                                    LocalStorage persistence.
                                </li>
                                <li>
                                    <strong className="text-white">
                                        System HUD Portfolio v3.0 (indraraj-portfolio-j1n8.vercel.app):
                                    </strong>{' '}
                                    Gamified 8-Bit RPG developer portfolio with dynamic HUD telemetry and Web Audio
                                    synth player.
                                </li>
                                <li>
                                    <strong className="text-white">C++ &amp; OOP Systems Suite:</strong> Modular
                                    object-oriented C++ programs utilizing custom classes, inheritance,
                                    polymorphism, and file streams.
                                </li>
                            </ul>
                        </div>

                        {/* Skills & Languages */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            <div>
                                <div className="text-amber-400 font-bold tracking-wider uppercase text-[11px] mb-1">
                                    TECHNICAL SKILLS
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    Next.js, React.js, JavaScript (ES6+), TypeScript, C++, OOP, Tailwind CSS,
                                    HTML5/CSS3, Git &amp; GitHub, Node.js, Digital Systems
                                </p>
                            </div>
                            <div>
                                <div className="text-amber-400 font-bold tracking-wider uppercase text-[11px] mb-1">
                                    STATS &amp; LANGUAGES
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    • Experience: {profile.totalExperience} ({profile.projectsCount} Projects
                                    Shipped)
                                    <br />• GitHub Streak: {profile.githubStreak}
                                    <br />• Languages: {profile.languages}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 text-xs font-bold border border-white/20 rounded text-slate-200 hover:bg-white/10"
                        >
                            OPEN /resume.pdf
                        </a>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setShowResumeModal(false)}
                                className="px-4 py-2 text-xs text-slate-400 hover:text-white cursor-pointer"
                            >
                                CLOSE
                            </button>
                            <button
                                onClick={() => window.print()}
                                className="px-5 py-2 bg-cyan-400 text-black font-extrabold text-xs rounded hover:bg-cyan-300 cursor-pointer"
                            >
                                🖨 PRINT / SAVE AS PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* ==========================================================================
          MODAL 3: LIVE "EDIT_STATS // HUD_CONFIG" DRAWER (LOCALSTORAGE PERSISTED)
      ========================================================================== */}
        {showConfigDrawer && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
                <div className="bg-[#0b1018] border-l border-amber-400/50 w-full max-w-md h-full p-6 overflow-y-auto space-y-5 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div>
                            <div className="text-[10px] font-bold tracking-widest text-amber-400">
                                HUD_CONFIG // LIVE STAT EDITOR
                            </div>
                            <h3 className="text-base font-extrabold text-white">
                                Customize Indraraj&apos;s Player Data
                            </h3>
                        </div>
                        <button
                            onClick={() => setShowConfigDrawer(false)}
                            className="text-slate-400 hover:text-white cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <p className="text-xs text-slate-400">
                        Any edits made here update the portfolio in real-time and save automatically in your
                        browser&apos;s <code className="text-amber-300">localStorage</code>.
                    </p>

                    {/* Profile Picture Uploader Box */}
                    <div className="p-3.5 rounded-lg bg-[#121824] border border-amber-400/30 space-y-2.5">
                        <div className="flex items-center gap-3">
                            <IndrarajProfileAvatar
                                customUrl={profile.customAvatarUrl}
                                sizeClass="w-12 h-12"
                                isGold={isGold}
                            />
                            <div className="text-xs">
                                <div className="font-bold text-white">Profile Portrait Image</div>
                                <div className="text-[11px] text-slate-400">
                                    Upload your exact PNG/JPG portrait file or use the built-in illustrated avatar.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                            <label className="flex-1 text-center px-3 py-1.5 rounded bg-amber-400 text-black font-extrabold text-[11px] hover:bg-amber-300 cursor-pointer">
                                UPLOAD IMAGE FILE
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarFileUpload}
                                    className="hidden"
                                />
                            </label>
                            {profile.customAvatarUrl && (
                                <button
                                    onClick={() => updateProfileField('customAvatarUrl', '')}
                                    className="px-3 py-1.5 rounded border border-white/15 text-[11px] text-slate-300 hover:text-white cursor-pointer"
                                >
                                    Use Default Illustrated
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="space-y-3 text-xs">
                        {[
                            { label: 'Full Name', key: 'fullName' },
                            { label: 'Player Card Name', key: 'cardName' },
                            { label: 'Level (LVL)', key: 'level' },
                            { label: 'Player Card Class', key: 'cardClass' },
                            { label: 'Current XP', key: 'xp' },
                            { label: 'Total Experience', key: 'totalExperience' },
                            { label: 'Projects Count', key: 'projectsCount' },
                            { label: 'Internships Count', key: 'internshipsCount' },
                            { label: 'GitHub Streak', key: 'githubStreak' },
                            { label: 'Location', key: 'location' },
                            { label: 'Short Location (Hero Box)', key: 'shortLocation' },
                            { label: 'Education Short', key: 'educationShort' },
                            { label: 'Email Address', key: 'email' },
                            { label: 'Phone / WhatsApp', key: 'phone' },
                            { label: 'GitHub Handle', key: 'githubHandle' },
                            { label: 'GitHub URL', key: 'githubUrl' },
                            { label: 'LinkedIn URL', key: 'linkedinUrl' },
                            { label: 'Hero Bio Quote', key: 'heroBio' },
                            { label: 'Current Mission Text', key: 'currentMission' }
                        ].map((field) => (
                            <div key={field.key}>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    {field.label}
                                </label>
                                <input
                                    type="text"
                                    value={profile[field.key] ?? ''}
                                    onChange={(e) => updateProfileField(field.key, e.target.value)}
                                    className="w-full bg-[#121824] border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                        <button
                            onClick={resetProfileData}
                            className="px-3 py-2 rounded border border-rose-500/40 text-rose-300 text-xs font-bold hover:bg-rose-500/10 cursor-pointer"
                        >
                            RESET TO VERIFIED DEFAULTS
                        </button>

                        <button
                            onClick={handleExportJson}
                            className="px-4 py-2 rounded bg-amber-400 text-black text-xs font-extrabold hover:bg-amber-300 cursor-pointer"
                        >
                            {copiedJson ? '✓ COPIED JSON!' : 'EXPORT JSON'}
                        </button>
                    </div>
                </div>
            </div>
        )}

        {/* ==========================================================================
          MODAL 4: LIVE SKILL DECK MANAGER (ADD / EDIT / DELETE / REORDER SKILLS)
      ========================================================================== */}
        {showSkillModal && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-[#0c111a] border border-amber-400/60 rounded-xl max-w-xl w-full p-6 space-y-5 relative shadow-2xl my-8">
                    <button
                        onClick={() => setShowSkillModal(false)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div>
                        <div className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                            SKILL_DECK_FORGE // LIVE CUSTOMIZER
                        </div>
                        <h3 className="text-lg font-extrabold text-white">
                            {editingSkillId ? `Edit Skill: ${skillForm.name}` : 'Equip or Manage Skill Deck'}
                        </h3>
                    </div>

                    {/* Skill Editor Form */}
                    <form onSubmit={handleSaveSkill} className="space-y-3.5 text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Skill Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. TypeScript, Docker, Python, MongoDB"
                                    value={skillForm.name}
                                    onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Card Tier Badge
                                </label>
                                <select
                                    value={skillForm.tier}
                                    onChange={(e) => setSkillForm({ ...skillForm, tier: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                >
                                    <option value="GOLD">☆ GOLD (Master / Primary)</option>
                                    <option value="SILVER">🛡️ SILVER (Proficient)</option>
                                    <option value="BRONZE">🥉 BRONZE (Learning / Exploring)</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <div className="flex justify-between text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    <span>Power Level (PWR)</span>
                                    <span className={accentText}>{skillForm.score} / 100</span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="100"
                                    value={skillForm.score}
                                    onChange={(e) =>
                                        setSkillForm({ ...skillForm, score: Number(e.target.value) })
                                    }
                                    className="w-full accent-amber-400 cursor-pointer mt-1.5"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Card Icon
                                </label>
                                <select
                                    value={skillForm.iconName}
                                    onChange={(e) => setSkillForm({ ...skillForm, iconName: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                >
                                    {Object.keys(SKILL_ICON_MAP).map((iconKey) => (
                                        <option key={iconKey} value={iconKey}>
                                            {iconKey} Icon
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                1-Line Specialty Description
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Type-safe full-stack apps & APIs"
                                value={skillForm.desc}
                                onChange={(e) => setSkillForm({ ...skillForm, desc: e.target.value })}
                                className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                            />
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                            {editingSkillId ? (
                                <button
                                    type="button"
                                    onClick={() => handleDeleteSkill(editingSkillId, skillForm.name)}
                                    className="px-3.5 py-2 rounded border border-rose-500/50 bg-rose-500/10 text-rose-300 font-bold hover:bg-rose-500/20 cursor-pointer"
                                >
                                    🗑 DELETE SKILL
                                </button>
                            ) : (
                                <span className="text-[11px] text-slate-400">
                                    Saves automatically to your browser
                                </span>
                            )}

                            <div className="flex items-center gap-2 ml-auto">
                                {editingSkillId && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setEditingSkillId(null);
                                            setSkillForm({
                                                name: '',
                                                tier: 'GOLD',
                                                score: 90,
                                                desc: '',
                                                iconName: 'Zap'
                                            });
                                        }}
                                        className="px-3 py-2 rounded border border-white/15 text-slate-300 hover:text-white cursor-pointer"
                                    >
                                        + Switch to Add Mode
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className={`px-5 py-2 rounded font-extrabold text-black cursor-pointer ${isGold
                                            ? 'bg-amber-400 hover:bg-amber-300'
                                            : 'bg-[#84cc16] hover:bg-lime-300'
                                        }`}
                                >
                                    {editingSkillId ? '✓ SAVE CHANGES' : '+ EQUIP TO DECK'}
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Quick List of All Equipped Skills */}
                    <div className="pt-4 border-t border-white/10 space-y-2.5">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                                CURRENTLY EQUIPPED SKILLS ({skills.length})
                            </span>
                            <button
                                type="button"
                                onClick={handleResetSkills}
                                className="text-[10px] text-rose-400 hover:underline cursor-pointer"
                            >
                                Reset to Default 8 Skills
                            </button>
                        </div>

                        <div className="max-h-44 overflow-y-auto space-y-1.5 pr-1">
                            {skills.map((s) => (
                                <div
                                    key={s.id || s.name}
                                    className="flex items-center justify-between px-3 py-2 rounded bg-[#121824] border border-white/10 text-xs"
                                >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <span
                                            className={`px-1.5 py-0.5 text-[9px] font-bold rounded ${s.tier === 'GOLD'
                                                    ? 'bg-amber-500/20 text-amber-300'
                                                    : s.tier === 'BRONZE'
                                                        ? 'bg-orange-500/20 text-orange-300'
                                                        : 'bg-slate-500/20 text-slate-300'
                                                }`}
                                        >
                                            {s.tier}
                                        </span>
                                        <span className="font-bold text-white truncate">{s.name}</span>
                                        <span className="text-[10px] text-slate-400">{s.score}/100</span>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                        <button
                                            type="button"
                                            onClick={() => openEditSkillModal(s)}
                                            className="text-[10px] text-cyan-400 hover:underline cursor-pointer"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteSkill(s.id, s.name)}
                                            className="text-[10px] text-rose-400 hover:underline cursor-pointer"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* ==========================================================================
          MODAL 5: MULTI-PLATFORM MUSIC & PLAYLIST HUB (SPOTIFY / YOUTUBE / SOUNDCLOUD / MP3)
      ========================================================================== */}
        {showMusicModal && (
            <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-[#0b1018] border border-emerald-400/60 rounded-xl max-w-2xl w-full p-6 space-y-5 relative shadow-2xl my-8">
                    <button
                        onClick={() => setShowMusicModal(false)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex flex-wrap items-center justify-between gap-2 pr-8">
                        <div>
                            <div className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                                AUDIO_STATION // MULTI-PLATFORM MUSIC DECK
                            </div>
                            <h3 className="text-lg font-extrabold text-white">
                                Connect Spotify, YouTube Music, SoundCloud &amp; MP3s
                            </h3>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-bold rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                            {playlist.length} Tracks / Playlists Loaded
                        </span>
                    </div>

                    {/* Connect Any External Platform Link Form */}
                    <form
                        onSubmit={handleAddCustomTrack}
                        className="p-4 rounded-lg bg-[#111723] border border-white/10 space-y-3 text-xs"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
                                + Paste Any Song or Playlist Link
                            </span>
                            <span className="text-[10px] text-slate-400">
                                Supports: 🟢 Spotify • 🔴 YouTube • 🟠 SoundCloud • 🎧 Direct .mp3
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            <input
                                type="text"
                                placeholder="Song or Playlist Title (e.g. My Coding Vibe)"
                                value={newTrackForm.title}
                                onChange={(e) =>
                                    setNewTrackForm({ ...newTrackForm, title: e.target.value })
                                }
                                className="bg-[#0b0f17] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                            />
                            <input
                                type="text"
                                placeholder="Artist / Platform Label (optional)"
                                value={newTrackForm.artist}
                                onChange={(e) =>
                                    setNewTrackForm({ ...newTrackForm, artist: e.target.value })
                                }
                                className="bg-[#0b0f17] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2.5">
                            <input
                                type="url"
                                required
                                placeholder="Paste Spotify Track/Playlist URL, YouTube URL, SoundCloud URL, or .mp3 URL..."
                                value={newTrackForm.url}
                                onChange={(e) =>
                                    setNewTrackForm({ ...newTrackForm, url: e.target.value })
                                }
                                className="flex-1 bg-[#0b0f17] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 rounded bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold cursor-pointer shrink-0"
                            >
                                + CONNECT &amp; PLAY
                            </button>
                        </div>

                        {/* Local MP3 File Uploader */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10">
                            <span className="text-[11px] text-slate-400">
                                Or play an audio file directly from your computer:
                            </span>
                            <label className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 border border-white/15 text-[11px] font-bold text-white cursor-pointer">
                                💿 UPLOAD LOCAL .MP3 / .WAV
                                <input
                                    type="file"
                                    accept="audio/*"
                                    onChange={handleLocalAudioUpload}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </form>

                    {/* Live Embedded Preview inside Modal if Spotify/YouTube/SoundCloud is active */}
                    {(currentTrack.platform === 'SPOTIFY' ||
                        currentTrack.platform === 'YOUTUBE' ||
                        currentTrack.platform === 'SOUNDCLOUD') && (
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-[10px] text-slate-400">
                                    <span>ACTIVE {currentTrack.platform} EMBED PLAYER</span>
                                    <a
                                        href={currentTrack.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-emerald-400 hover:underline flex items-center gap-1"
                                    >
                                        <span>Open in {currentTrack.platform} App</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                                <div className="rounded-lg overflow-hidden border border-white/15 bg-black">
                                    <iframe
                                        src={currentTrack.embedUrl}
                                        width="100%"
                                        height={currentTrack.platform === 'SPOTIFY' ? '152' : '200'}
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                        title={currentTrack.title}
                                        className="w-full border-0"
                                    />
                                </div>
                            </div>
                        )}

                    {/* Saved Playlist Queue */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                                YOUR CONNECTED PLAYLIST QUEUE
                            </span>
                            <button
                                onClick={() => {
                                    savePlaylistToStorage(DEFAULT_PLAYLIST_DATA);
                                    setTrackIndex(0);
                                }}
                                className="text-[10px] text-rose-400 hover:underline cursor-pointer"
                            >
                                Reset Default Playlist
                            </button>
                        </div>

                        <div className="max-h-56 overflow-y-auto space-y-1.5 pr-1">
                            {playlist.map((item, idx) => {
                                const isCurrent = idx === trackIndex;
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => handleSelectTrack(idx)}
                                        className={`flex items-center justify-between p-2.5 rounded-lg border transition-all cursor-pointer ${isCurrent
                                                ? 'bg-emerald-500/15 border-emerald-400/60 text-white'
                                                : 'bg-[#121824] border-white/10 text-slate-300 hover:border-white/25'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 min-w-0">
                                            <span className="text-base">{item.cover || '🎵'}</span>
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold truncate">{item.title}</span>
                                                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-black/50 border border-white/10 text-slate-300">
                                                        {item.platform}
                                                    </span>
                                                </div>
                                                <div className="text-[10px] text-slate-400 truncate">{item.artist}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0">
                                            {isCurrent && (
                                                <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                                                    ● ACTIVE
                                                </span>
                                            )}
                                            {playlist.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleRemoveTrack(item.id);
                                                    }}
                                                    className="text-[10px] text-rose-400 hover:underline px-1.5 py-0.5 cursor-pointer"
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* ==========================================================================
          MODAL 6: LIVE "THE GRIND" (QUEST LOG TIMELINE) MANAGER
      ========================================================================== */}
        {showQuestModal && (
            <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-[#0c111a] border border-amber-400/60 rounded-xl max-w-2xl w-full p-6 space-y-5 relative shadow-2xl my-8">
                    <button
                        onClick={() => setShowQuestModal(false)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div>
                        <div className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                            QUEST_LOG_FORGE // THE GRIND MANAGER
                        </div>
                        <h3 className="text-lg font-extrabold text-white">
                            {editingQuestId
                                ? `Edit Quest: ${questForm.title}`
                                : 'Add or Manage "The Grind" Quests'}
                        </h3>
                    </div>

                    <form onSubmit={handleSaveQuest} className="space-y-3.5 text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Quest Status
                                </label>
                                <select
                                    value={questForm.status}
                                    onChange={(e) => setQuestForm({ ...questForm, status: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                >
                                    <option value="ACTIVE">• ACTIVE</option>
                                    <option value="COMPLETED">✓ COMPLETED</option>
                                    <option value="UPCOMING">⚔️ UPCOMING</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Date / Duration
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Nov 2026 - Present"
                                    value={questForm.date}
                                    onChange={(e) => setQuestForm({ ...questForm, date: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                        XP Reward
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="+2000 XP"
                                        value={questForm.xp}
                                        onChange={(e) => setQuestForm({ ...questForm, xp: e.target.value })}
                                        className="w-full bg-[#131a27] border border-white/15 rounded px-2.5 py-2 text-white focus:outline-none focus:border-amber-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                        Node Badge
                                    </label>
                                    <input
                                        type="text"
                                        maxLength={3}
                                        placeholder="CR"
                                        value={questForm.badgeText}
                                        onChange={(e) => setQuestForm({ ...questForm, badgeText: e.target.value })}
                                        className="w-full bg-[#131a27] border border-white/15 rounded px-2.5 py-2 text-white focus:outline-none focus:border-amber-400"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Role / Milestone Title *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Full-Stack Developer Intern"
                                    value={questForm.title}
                                    onChange={(e) => setQuestForm({ ...questForm, title: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Organization / Company / College
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Cravora // Gyan Sagar College (RGPV)"
                                    value={questForm.org}
                                    onChange={(e) => setQuestForm({ ...questForm, org: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                Key Accomplishments (One bullet point per line)
                            </label>
                            <textarea
                                rows={3}
                                placeholder={
                                    'Built and deployed full-stack web apps with Next.js\nOptimized performance and database queries'
                                }
                                value={questForm.bulletsText}
                                onChange={(e) => setQuestForm({ ...questForm, bulletsText: e.target.value })}
                                className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400 resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                Tech Tags (Comma separated)
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Next.js, React, C++, Tailwind CSS, Vercel"
                                value={questForm.tagsText}
                                onChange={(e) => setQuestForm({ ...questForm, tagsText: e.target.value })}
                                className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                            />
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                            {editingQuestId ? (
                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuest(editingQuestId, questForm.title)}
                                    className="px-3.5 py-2 rounded border border-rose-500/50 bg-rose-500/10 text-rose-300 font-bold hover:bg-rose-500/20 cursor-pointer"
                                >
                                    🗑 DELETE QUEST
                                </button>
                            ) : (
                                <span className="text-[11px] text-slate-400">
                                    Saves automatically to your browser
                                </span>
                            )}

                            <div className="flex items-center gap-2 ml-auto">
                                {editingQuestId && (
                                    <button
                                        type="button"
                                        onClick={openAddQuestModal}
                                        className="px-3 py-2 rounded border border-white/15 text-slate-300 hover:text-white cursor-pointer"
                                    >
                                        + Switch to Add Mode
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className={`px-5 py-2 rounded font-extrabold text-black cursor-pointer ${isGold
                                            ? 'bg-amber-400 hover:bg-amber-300'
                                            : 'bg-[#84cc16] hover:bg-lime-300'
                                        }`}
                                >
                                    {editingQuestId ? '✓ SAVE QUEST CHANGES' : '+ ADD TO THE GRIND'}
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Quick List of All Quests */}
                    <div className="pt-4 border-t border-white/10 space-y-2.5">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                                CURRENT TIMELINE QUESTS ({quests.length})
                            </span>
                            <button
                                type="button"
                                onClick={handleResetQuests}
                                className="text-[10px] text-rose-400 hover:underline cursor-pointer"
                            >
                                Reset Default Timeline
                            </button>
                        </div>

                        <div className="max-h-44 overflow-y-auto space-y-1.5 pr-1">
                            {quests.map((q) => (
                                <div
                                    key={q.id}
                                    className="flex items-center justify-between px-3 py-2 rounded bg-[#121824] border border-white/10 text-xs"
                                >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-amber-500/20 text-amber-300">
                                            {q.status}
                                        </span>
                                        <span className="font-bold text-white truncate">{q.title}</span>
                                        <span className="text-[10px] text-slate-400 shrink-0">({q.date})</span>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                        <button
                                            type="button"
                                            onClick={() => openEditQuestModal(q)}
                                            className="text-[10px] text-cyan-400 hover:underline cursor-pointer"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteQuest(q.id, q.title)}
                                            className="text-[10px] text-rose-400 hover:underline cursor-pointer"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* ==========================================================================
          MODAL 7: LIVE "FEATURED PROJECTS" MANAGER (ADD / EDIT / REMOVE PROJECTS)
      ========================================================================== */}
        {showProjectEditorModal && (
            <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-[#0c111a] border border-amber-400/60 rounded-xl max-w-2xl w-full p-6 space-y-5 relative shadow-2xl my-8">
                    <button
                        onClick={() => setShowProjectEditorModal(false)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div>
                        <div className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                            PROJECT_ARCHIVE_FORGE // LIVE SHOWCASE EDITOR
                        </div>
                        <h3 className="text-lg font-extrabold text-white">
                            {editingProjectId
                                ? `Edit Project: ${projectForm.title}`
                                : 'Add or Manage Featured Projects'}
                        </h3>
                    </div>

                    <form onSubmit={handleSaveProject} className="space-y-3.5 text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="sm:col-span-2">
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Project Title *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Cravora — Food Ordering App"
                                    value={projectForm.title}
                                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Filter Category
                                </label>
                                <select
                                    value={projectForm.category}
                                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                >
                                    <option value="WEB APPS">WEB APPS</option>
                                    <option value="C++ & SYSTEMS">C++ &amp; SYSTEMS</option>
                                    <option value="UI/UX">UI/UX</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Browser Bar Display Slug
                                </label>
                                <input
                                    type="text"
                                    placeholder="cravora-inky.vercel.app"
                                    value={projectForm.url}
                                    onChange={(e) => setProjectForm({ ...projectForm, url: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Live Deployment URL
                                </label>
                                <input
                                    type="text"
                                    placeholder="https://cravora-inky.vercel.app/"
                                    value={projectForm.liveLink}
                                    onChange={(e) => setProjectForm({ ...projectForm, liveLink: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    GitHub Repository URL
                                </label>
                                <input
                                    type="text"
                                    placeholder="https://github.com/Indrajthakur/..."
                                    value={projectForm.repoLink}
                                    onChange={(e) => setProjectForm({ ...projectForm, repoLink: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                Project Description
                            </label>
                            <textarea
                                rows={2}
                                placeholder="Describe what the project does, key features, and architecture..."
                                value={projectForm.desc}
                                onChange={(e) => setProjectForm({ ...projectForm, desc: e.target.value })}
                                className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400 resize-none"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Tech Stack Tags (Comma separated)
                                </label>
                                <input
                                    type="text"
                                    placeholder="React, Next.js, Tailwind CSS"
                                    value={projectForm.tagsText}
                                    onChange={(e) => setProjectForm({ ...projectForm, tagsText: e.target.value })}
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Key Highlights (Comma separated)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Live on Vercel, Responsive UI"
                                    value={projectForm.metricsText}
                                    onChange={(e) =>
                                        setProjectForm({ ...projectForm, metricsText: e.target.value })
                                    }
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-wider text-slate-400 uppercase mb-1">
                                    Window Preview Theme
                                </label>
                                <select
                                    value={projectForm.previewType}
                                    onChange={(e) =>
                                        setProjectForm({ ...projectForm, previewType: e.target.value })
                                    }
                                    className="w-full bg-[#131a27] border border-white/15 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                                >
                                    <option value="cravora">🍔 Food / E-Commerce Cards</option>
                                    <option value="analytics">📊 Analytics &amp; Timer Chart</option>
                                    <option value="kanban">📋 Kanban Task Queue</option>
                                    <option value="hud">⚡ Cyberpunk HUD Banner</option>
                                    <option value="terminal">💻 C++ / Systems Terminal</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                            {editingProjectId ? (
                                <button
                                    type="button"
                                    onClick={() => handleDeleteProject(editingProjectId, projectForm.title)}
                                    className="px-3.5 py-2 rounded border border-rose-500/50 bg-rose-500/10 text-rose-300 font-bold hover:bg-rose-500/20 cursor-pointer"
                                >
                                    🗑 DELETE PROJECT
                                </button>
                            ) : (
                                <span className="text-[11px] text-slate-400">
                                    Saves automatically &amp; updates project counter
                                </span>
                            )}

                            <div className="flex items-center gap-2 ml-auto">
                                {editingProjectId && (
                                    <button
                                        type="button"
                                        onClick={openAddProjectModal}
                                        className="px-3 py-2 rounded border border-white/15 text-slate-300 hover:text-white cursor-pointer"
                                    >
                                        + Switch to Add Mode
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className={`px-5 py-2 rounded font-extrabold text-black cursor-pointer ${isGold
                                            ? 'bg-amber-400 hover:bg-amber-300'
                                            : 'bg-[#84cc16] hover:bg-lime-300'
                                        }`}
                                >
                                    {editingProjectId ? '✓ SAVE PROJECT CHANGES' : '+ ADD FEATURED PROJECT'}
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Quick List of All Projects */}
                    <div className="pt-4 border-t border-white/10 space-y-2.5">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                                ALL FEATURED PROJECTS ({projects.length})
                            </span>
                            <button
                                type="button"
                                onClick={handleResetProjects}
                                className="text-[10px] text-rose-400 hover:underline cursor-pointer"
                            >
                                Reset Default 5 Projects
                            </button>
                        </div>

                        <div className="max-h-44 overflow-y-auto space-y-1.5 pr-1">
                            {projects.map((p) => (
                                <div
                                    key={p.id}
                                    className="flex items-center justify-between px-3 py-2 rounded bg-[#121824] border border-white/10 text-xs"
                                >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-cyan-500/20 text-cyan-300">
                                            {p.category}
                                        </span>
                                        <span className="font-bold text-white truncate">{p.title}</span>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                        <button
                                            type="button"
                                            onClick={() => openEditProjectModal(p)}
                                            className="text-[10px] text-cyan-400 hover:underline cursor-pointer"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteProject(p.id, p.title)}
                                            className="text-[10px] text-rose-400 hover:underline cursor-pointer"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* ==========================================================================
          MODAL 8: FULL NEXT.JS REPOSITORY MULTI-FILE CODE EXPORTER
      ========================================================================== */}
        {showCodeExportModal && (
            <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-[#0b1018] border border-cyan-400/60 rounded-xl max-w-4xl w-full p-6 space-y-5 relative shadow-2xl my-8">
                    <button
                        onClick={() => setShowCodeExportModal(false)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex flex-wrap items-center justify-between gap-2 pr-8">
                        <div>
                            <div className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase">
                                NEXT.JS 15 REPOSITORY // FILE-BY-FILE ARCHITECTURE
                            </div>
                            <h3 className="text-lg font-extrabold text-white">
                                Production Next.js Project Files (`indraraj-portfolio`)
                            </h3>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-bold rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                            100% Ready for Vercel &amp; GitHub
                        </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                        Every custom edit you made to your <strong className="text-white">Profile</strong>,{' '}
                        <strong className="text-white">The Grind</strong>,{' '}
                        <strong className="text-white">Skill Deck</strong>,{' '}
                        <strong className="text-white">Featured Projects</strong>, and{' '}
                        <strong className="text-white">Music Deck</strong> is included below. For{' '}
                        <code className="text-amber-300">app/page.jsx</code>, add{' '}
                        <code className="text-emerald-300">&quot;use client&quot;;</code> at the very top of{' '}
                        <code className="text-amber-300">App.jsx</code> from the right-hand code editor.
                    </p>

                    {/* File Tabs */}
                    <div className="flex flex-wrap gap-1.5 border-b border-white/10 pb-3">
                        {Object.keys(repoFiles).map((fileKey) => {
                            const isSelected = activeExportFile === fileKey;
                            return (
                                <button
                                    key={fileKey}
                                    onClick={() => setActiveExportFile(fileKey)}
                                    className={`px-3 py-1.5 text-xs font-bold rounded border transition-all cursor-pointer ${isSelected
                                            ? 'bg-cyan-400 text-black border-cyan-400'
                                            : 'bg-[#121824] text-slate-300 border-white/10 hover:text-white'
                                        }`}
                                >
                                    {fileKey}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active File Code Viewer */}
                    <div className="bg-[#06090e] border border-white/15 rounded-lg overflow-hidden">
                        <div className="px-4 py-2 bg-[#111722] border-b border-white/10 flex items-center justify-between">
                            <span className="text-xs font-bold text-cyan-300">{activeExportFile}</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleCopyRepoFile(activeExportFile)}
                                    className="px-3 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-200 text-[11px] font-bold cursor-pointer"
                                >
                                    {copiedExportFile ? '✓ COPIED!' : '📋 COPY FILE'}
                                </button>
                                <button
                                    onClick={() => handleDownloadRepoFile(activeExportFile)}
                                    className="px-3 py-1 rounded bg-amber-400 hover:bg-amber-300 text-black text-[11px] font-extrabold cursor-pointer"
                                >
                                    ⬇ DOWNLOAD FILE
                                </button>
                            </div>
                        </div>
                        <pre className="p-4 text-xs text-slate-200 overflow-x-auto max-h-80 leading-relaxed font-mono">
                            <code>{repoFiles[activeExportFile]}</code>
                        </pre>
                    </div>
                </div>
            </div>
        )}
    </div>
);
}

// ============================================================================
// SUB-COMPONENT: QUEST TIMELINE CARD (MATCHES SCREENSHOTS 3 & 5)
// ============================================================================
function QuestCard({ quest, align, isGold, accentText, onEdit, onDelete }) {
    const isRightAligned = align === 'right';

    return (
        <div
            className={`group relative bg-[#0e1218]/95 backdrop-blur-md border rounded-xl p-5 sm:p-6 transition-all duration-300 text-left ${isRightAligned ? 'md:text-right' : 'md:text-left'
                } ${isGold
                    ? 'border-amber-500/35 hover:border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.1)]'
                    : 'border-emerald-500/35 hover:border-emerald-400 shadow-[0_0_30px_rgba(34,197,94,0.1)]'
                }`}
        >
            {/* Top Status Bar: • ACTIVE always on left, +2000 XP + Quick Edit/Delete buttons always on right */}
            <div className="flex items-center justify-between text-[10px] tracking-widest pb-3 mb-4 border-b border-white/10">
                <span className={`font-bold flex items-center gap-1.5 ${accentText}`}>
                    <span>•</span>
                    <span>{quest.status}</span>
                </span>
                <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-semibold">{quest.xp}</span>
                    {onEdit && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onEdit();
                            }}
                            className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-white/10 hover:bg-amber-400 hover:text-black text-slate-300 transition-colors cursor-pointer"
                            title="Edit Quest"
                        >
                            EDIT
                        </button>
                    )}
                    {onDelete && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete();
                            }}
                            className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-rose-500/15 hover:bg-rose-500 hover:text-white text-rose-300 transition-colors cursor-pointer"
                            title="Delete Quest"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            {/* Date Pill */}
            <div className={`mb-2.5 flex ${isRightAligned ? 'md:justify-end' : 'justify-start'}`}>
                <span className="px-3 py-1 text-[10px] font-semibold rounded border border-amber-500/30 bg-amber-500/10 text-amber-300">
                    {quest.date}
                </span>
            </div>

            {/* Role Title */}
            <h3
                className={`text-lg sm:text-xl font-extrabold mb-1.5 leading-snug ${quest.isFuture ? 'text-white' : accentText
                    }`}
            >
                {quest.title}
            </h3>

            {/* Organization Name */}
            <div
                className={`flex items-center gap-2 text-xs font-semibold text-amber-200/90 mb-4 ${isRightAligned ? 'md:justify-end' : 'justify-start'
                    }`}
            >
                <span className="w-5 h-5 rounded-full bg-white text-black text-[9px] font-extrabold inline-flex items-center justify-center shrink-0">
                    {quest.badgeText}
                </span>
                <span>{quest.org}</span>
            </div>

            {/* Bullet Points (Cleanly aligned toward the center timeline spline) */}
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed mb-5">
                {quest.bullets.map((b, i) => (
                    <li
                        key={i}
                        className={`flex items-start gap-2.5 ${isRightAligned ? 'md:flex-row-reverse md:text-right' : 'text-left'
                            }`}
                    >
                        <span className={`${accentText} mt-0.5 shrink-0`}>▸</span>
                        <span className="flex-1">{b}</span>
                    </li>
                ))}
            </ul>

            {/* Tech Stack Pills */}
            <div
                className={`flex flex-wrap gap-1.5 pt-2 border-t border-white/5 ${isRightAligned ? 'md:justify-end' : 'justify-start'
                    }`}
            >
                {quest.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[10px] font-semibold rounded border border-amber-500/30 bg-amber-500/10 text-amber-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

// ============================================================================
// SUB-COMPONENT: BROWSER WINDOW PREVIEW GRAPHICS
// ============================================================================
function ProjectPreviewArt({ type, title }) {
    if (type === 'cravora') {
        return (
            <div className="w-full h-full flex flex-col justify-between text-left">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-orange-300 tracking-wider flex items-center gap-1.5">
                        <span>🍔</span>
                        <span>CRAVORA // LIVE_VERCEL</span>
                    </span>
                    <span className="px-2 py-0.5 text-[9px] bg-orange-500/20 border border-orange-400/40 text-orange-300 rounded font-bold">
                        ORDER NOW
                    </span>
                </div>

                {/* Cravora Menu Preview Cards */}
                <div className="grid grid-cols-3 gap-2 my-auto pt-2">
                    {[
                        { name: 'Artisan Burger', price: '₹249', tag: '🔥 Hot' },
                        { name: 'Woodfire Pizza', price: '₹399', tag: '⭐ 4.9' },
                        { name: 'Loaded Fries', price: '₹149', tag: '⚡ Fast' }
                    ].map((item) => (
                        <div
                            key={item.name}
                            className="bg-black/60 border border-orange-400/25 rounded p-2 flex flex-col justify-between"
                        >
                            <div className="text-[8px] text-orange-300 font-bold">{item.tag}</div>
                            <div className="text-[10px] text-white font-bold truncate mt-1">{item.name}</div>
                            <div className="flex items-center justify-between mt-1.5">
                                <span className="text-[9px] text-emerald-400 font-bold">{item.price}</span>
                                <span className="w-3.5 h-3.5 rounded bg-orange-500 text-black text-[9px] font-extrabold flex items-center justify-center">
                                    +
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-[10px] text-slate-300 flex justify-between items-center pt-1">
                    <span>cravora-inky.vercel.app</span>
                    <span className="text-emerald-400 font-bold">● Production Live</span>
                </div>
            </div>
        );
    }

    if (type === 'analytics') {
        return (
            <div className="w-full h-full flex flex-col justify-between text-left">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-300 tracking-wider">
                        STUDYFLOW // FOCUS_HUD
                    </span>
                    <span className="px-2 py-0.5 text-[9px] bg-emerald-500/20 text-emerald-300 rounded">
                        25:00 POMODORO
                    </span>
                </div>
                {/* Bar chart mockup */}
                <div className="flex items-end gap-2 h-20 pt-4 px-2">
                    {[35, 55, 45, 75, 65, 95, 85].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div
                                className="w-full bg-indigo-500/60 border-t border-indigo-300 rounded-t"
                                style={{ height: `${h}%` }}
                            />
                        </div>
                    ))}
                </div>
                <div className="text-[10px] text-slate-400 flex justify-between">
                    <span>Weekly Study Streak: 14h</span>
                    <span className="text-emerald-400">● Synced</span>
                </div>
            </div>
        );
    }

    if (type === 'kanban') {
        return (
            <div className="w-full h-full flex flex-col justify-between">
                <div className="text-[10px] font-bold text-cyan-300">TASK_MANAGER // QUEUE</div>
                <div className="grid grid-cols-2 gap-2 my-auto">
                    <div className="bg-black/50 border border-white/10 p-2 rounded">
                        <div className="text-[9px] text-amber-400 mb-1">IN PROGRESS (2)</div>
                        <div className="h-2 bg-white/20 rounded w-3/4 mb-1.5" />
                        <div className="h-2 bg-white/10 rounded w-1/2" />
                    </div>
                    <div className="bg-black/50 border border-emerald-500/30 p-2 rounded">
                        <div className="text-[9px] text-emerald-400 mb-1">COMPLETED (8)</div>
                        <div className="h-2 bg-emerald-400/30 rounded w-full mb-1.5" />
                        <div className="h-2 bg-emerald-400/20 rounded w-2/3" />
                    </div>
                </div>
                <div className="text-[10px] text-slate-400">Priority Queue &amp; LocalStorage</div>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
            <div className="text-xs font-bold tracking-widest text-amber-300 mb-1">{title}</div>
            <div className="text-[10px] text-slate-400 max-w-[200px]">
                Interactive System Architecture &amp; Responsive HUD Interface
            </div>
        </div>
    );
}