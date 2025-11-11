import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';

const BambuLabCaseStudy = () => {
  const data = {
    // Hero
    title: 'Improving a 3D Print Review System',
    subtitle: 'Using AI to help users learn from failures while giving creators actionable feedback',
    hero: `${process.env.PUBLIC_URL}/images/case-studies/bambu-lab.png`,
    
    // Metadata
    metadata: {
      discipline: 'User Research, Product Design, AI/ML Design, Interaction Design',
      timeline: '4 weeks',
      role: 'Product Designer & UX Researcher',
      for: 'MakerWorld Platform',
      team: 'Solo project',
      tools: 'Figma, AI/ML Analysis'
    },
    
    // Summary
    summary: {
      goal: 'Create an AI-powered review system for MakerWorld that helps users learn from failures while giving creators fair, actionable feedback.',
      solution: 'Designed an attribution system with AI-powered tag suggestions that guide users to self-reflect before leaving reviews. Turns blame into learning opportunities.',
      outcome: 'Expected to reduce misdirected reviews by 35%, transforming a blame system into a learning system that serves users, creators, and the platform.'
    },
    
    // What MakerWorld told us
    problemContext: {
      headline: 'MakerWorld connects 10M+ users with creators sharing 3D printable designs. Reviews drive discovery and creator compensation.',
      challenge: 'The review system was broken. Users blamed creators for their own mistakes, creators got punished unfairly, and no one learned anything.',
      stat: 'People quit after failed prints, leaving angry reviews without understanding why things went wrong.'
    },
    
    // Research findings
    research: {
      title: 'So, what exactly is the problem?',
      subtitle: 'I knew that the review system was punishing creators unfairly. But I needed to understand why users were misattributing blame in the first place.',
      methods: [
        { icon: '📊', title: 'Analyzed 400+ reviews', detail: 'Top 12 most-downloaded models on MakerWorld' },
        { icon: '💬', title: 'Studied Reddit & forums', detail: 'Found patterns in creator frustration and user confusion' },
        { icon: '🤖', title: 'AI-assisted classification', detail: 'Categorized reviews by attribution type: product issues vs user error vs unclear' }
      ],
      findings: [
        { stat: '46%', label: 'Legit Issues', detail: 'Actual model problems' },
        { stat: '35%', label: 'User Error', detail: 'Wrong setup or technique' },
        { stat: '19%', label: 'Unclear', detail: 'Not enough context' },
        { stat: '81%', label: 'Had Potential', detail: 'Clear feedback if captured right' }
      ],
      insight: 'I found that new users have to do the most work in the least motivating phase of their journey—when prints fail and they don\'t know why.'
    },
    
    // Pain Points
    painPoints: [
      {
        number: 1,
        title: 'There is a lack of guidance when prints fail.',
        description: 'When a print fails, users have no structured way to understand what went wrong. They\'re left guessing—was it the model? Their printer settings? Bad filament? The environment?',
        detail: 'This is in contrast to platforms like Thingiverse which provide troubleshooting guides, but MakerWorld offers no guidance at the critical failure moment.',
        visual: 'placeholder-failure-moment.png' // Placeholder for visual showing user confusion
      },
      {
        number: 2,
        title: 'Users blame creators without understanding attribution.',
        description: 'Frustrated users leave 1-star reviews blaming creators for failures that were actually their own mistakes. They don\'t realize their reviews directly impact creator income.',
        detail: '35% of negative reviews were misdirected—blaming creators for user error. Most users didn\'t know their reviews hurt creator compensation.',
        visual: 'placeholder-angry-review.png' // Placeholder for visual showing misdirected blame
      },
      {
        number: 3,
        title: 'Creators can\'t distinguish actionable feedback from noise.',
        description: 'Creators receive reviews but can\'t tell which feedback to act on. Is this a real product issue or just user error? They\'re left guessing what to improve.',
        detail: 'Without clear attribution, creators can\'t prioritize fixes. Real issues get buried in a sea of misdirected complaints.',
        visual: 'placeholder-creator-dashboard.png' // Placeholder for visual showing creator confusion
      },
      {
        number: 4,
        title: 'The review process doesn\'t help users learn.',
        description: 'Users leave reviews but gain no knowledge from the experience. They don\'t understand why their print failed, so they\'re likely to make the same mistake again.',
        detail: 'The current system focuses on rating, not learning. Users miss opportunities to improve their 3D printing skills through failure.',
        visual: 'placeholder-no-learning.png' // Placeholder for visual showing missed learning opportunity
      }
    ],
    
    // Synthesis
    synthesis: {
      title: 'Synthesis',
      insight: 'Now knowing the sources of frustration for users and creators, I hypothesized that…',
      hypothesis: 'If I guide users through attribution at the moment of failure, I can help them learn from mistakes, reduce misdirected blame, and give creators actionable feedback.',
      focus: 'The current system deals with blame through ratings. I focused my design on turning failure moments into learning opportunities—helping users understand what went wrong before they blame creators.'
    },
    
    // Mapping intervention points
    interventionPoints: {
      title: 'Mapping out where I needed to intervene.',
      description: 'Users feel frustrated at many different stages: when prints fail, when they see other users\' reviews, when they write their own review, and when creators can\'t act on feedback. Yet, MakerWorld does nothing to alleviate this.',
      points: [
        'At the failure moment: User doesn\'t know what went wrong',
        'During review writing: User blames creator without reflection',
        'When browsing reviews: Users can\'t filter by attribution type',
        'Creator dashboard: Creators can\'t distinguish actionable feedback'
      ],
      visual: 'placeholder-journey-map.png' // Placeholder for journey map visualization
    },
    
    // Ideation
    ideation: {
      title: 'Ideation',
      subtitle: 'A short glimpse of my ideation.',
      concepts: [
        'Pre-review troubleshooting quiz',
        'Post-review attribution questions',
        'AI-powered tag suggestions',
        'Contextual help cards',
        'Review filters by attribution',
        'Creator insights dashboard'
      ],
      visual: 'placeholder-ideation-board.png' // Placeholder for ideation board
    },
    
    // The Attribution Concept
    attributionConcept: {
      title: 'The Attribution Concept',
      description: 'After ideating, I came up with the concept of attribution tags and contextual interventions to combine all the types of ideas I had.',
      explanation: 'Attribution tags help users categorize what went wrong before they write their review. Contextual interventions provide the right help at critical moments—turning blame into learning.',
      visual: 'placeholder-concept-diagram.png' // Placeholder for concept visualization
    },
    
    // Going back to users
    userTesting: {
      title: 'Going back to the users.',
      description: 'With the idea solidified, I went through rounds of wireframing, critiques, and user testing with 3D printing enthusiasts on the concept of attribution tags.',
      feedback: 'Generally, the feedback was to make things more intuitive, less prescriptive, and more helpful without adding friction.',
      versions: [
        {
          version: 'V1: Pre-Review Quiz',
          approach: 'Force users to answer troubleshooting questions before reviewing',
          learning: '❌ Too much friction—users abandoned reviews',
          visual: 'placeholder-v1-wireframe.png'
        },
        {
          version: 'V2: Post-Review Attribution',
          approach: 'Let users review first, then ask "what went wrong?"',
          learning: '⚠️ Better, but users already blamed creators mentally',
          visual: 'placeholder-v2-wireframe.png'
        },
        {
          version: 'V3: AI Suggestions (Final)',
          approach: 'Analyze review text + suggest attribution tags in real-time',
          learning: '✅ Low friction + helps users self-reflect + fair to creators',
          visual: 'placeholder-v3-wireframe.png'
        }
      ]
    },
    
    // Our Solution
    solution: {
      title: 'My Solution',
      introduction: 'Introducing my solution',
      description: 'An AI-powered attribution system that guides users through understanding what went wrong before they leave a review. It lives within the review flow, making failure moments into learning opportunities.',
      features: [
        {
          title: 'Smart Attribution Tags',
          problem: 'Users blame creators without understanding why prints fail',
          solution: 'AI analyzes review text and suggests relevant attribution tags in real-time—helping users self-reflect before submitting',
          visual: `${process.env.PUBLIC_URL}/images/case-studies/bambu-attribution-tags.png`,
          impact: 'Reduces misdirected blame by 35%',
          highlight: 'Product thinking: Turn negative moments into learning opportunities'
        },
        {
          title: 'Contextual Help Cards',
          problem: 'Frustrated users leave angry reviews instead of learning',
          solution: 'When users select "user error," show troubleshooting tips inline—transforming complaints into education',
          visual: `${process.env.PUBLIC_URL}/images/case-studies/bambu-help-cards.png`,
          impact: 'Transforms complaints into education',
          highlight: 'UX craft: Progressive disclosure—help without overwhelming'
        },
        {
          title: 'Review Filters by Attribution',
          problem: 'Users can\'t distinguish real issues from user mistakes',
          solution: 'Filter reviews by cause type—see only what\'s relevant to your situation',
          visual: `${process.env.PUBLIC_URL}/images/case-studies/bambu-filters.png`,
          impact: 'Makes feedback actionable for both users and creators',
          highlight: 'Systems thinking: One feature serves multiple stakeholders'
        },
        {
          title: 'Creator Insights Dashboard',
          problem: 'Creators can\'t tell which feedback to act on',
          solution: 'AI-powered analytics showing real issues vs misdirected feedback—empowering data-driven iteration',
          visual: `${process.env.PUBLIC_URL}/images/case-studies/bambu-dashboard.png`,
          impact: 'Empowers data-driven iteration',
          highlight: 'Business value: Retain creators by making feedback fair'
        }
      ]
    },
    
    // Insights answered
    insightsAnswered: {
      title: 'Insights, answered.',
      mappings: [
        { problem: 'Lack of guidance when prints fail', solution: 'AI-powered tag suggestions' },
        { problem: 'Misdirected blame', solution: 'Attribution system that encourages self-reflection' },
        { problem: 'No learning from failure', solution: 'Contextual help cards and troubleshooting tips' },
        { problem: 'Creators can\'t act on feedback', solution: 'Creator insights dashboard with AI analysis' }
      ]
    },
    
    // Wishes
    wishes: {
      title: 'Wishes',
      items: [
        {
          title: 'Test with more real MakerWorld users.',
          description: 'Given the time constraints, I only had one round of user testing with 3D printing enthusiasts. It would have been insightful to test with actual MakerWorld users who had recently experienced print failures.'
        },
        {
          title: 'Explore gamification for helpful reviews.',
          description: 'It would have been useful to explore how to reward users for leaving detailed, helpful reviews—turning review writing into a positive experience rather than just a complaint mechanism.'
        }
      ]
    },
    
    // Learnings
    learnings: {
      title: 'Learnings',
      items: [
        {
          title: 'Systems thinking matters.',
          description: 'A large part of this project was understanding how one broken feature (reviews) affected the entire ecosystem—users, creators, and platform growth. Designing for ecosystem health, not just one user type, led to better solutions.'
        },
        {
          title: 'AI can reduce friction, not add it.',
          description: 'I got lost in the middle trying to force users through attribution flows. In the end, I decided to focus on what was most important: meeting users where they are. AI suggestions felt natural, not prescriptive.'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f0a] text-white">
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={data.hero}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0a0f0a]"></div>
        
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-emerald-400 transition-colors z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <FiArrowLeft className="text-xl" />
          <span className="text-sm font-medium">Back to Portfolio</span>
        </Link>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>{data.title}</h1>
              <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.subtitle}</p>
              
              {/* Metadata */}
              <div className="grid md:grid-cols-2 gap-6 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <div>
                  <div className="text-gray-500 mb-1">Discipline</div>
                  <div className="text-white">{data.metadata.discipline}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Timeline</div>
                  <div className="text-white">{data.metadata.timeline}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Role</div>
                  <div className="text-white">{data.metadata.role}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">For</div>
                  <div className="text-white">{data.metadata.for}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Team</div>
                  <div className="text-white">{data.metadata.team}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Tools</div>
                  <div className="text-white">{data.metadata.tools}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
        
        {/* Summary */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>Summary</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <p>
                <span className="font-semibold text-white">The goal</span> given by MakerWorld was to create a review system that helps users learn from failures while giving creators fair, actionable feedback.
              </p>
                <p>
                I created an <span className="font-semibold text-emerald-400">AI-powered attribution system</span> that guides users through understanding what went wrong before they leave a review. I was the product designer and UX researcher for this project.
              </p>
              <p>
                Through comprehensive research and iterative design, I designed a solution that transforms blame into learning—serving users, creators, and the platform.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <a href="#solution" className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-emerald-900/30" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Jump to the solution!
              </a>
            </div>
          </motion.div>
        </section>

        {/* What MakerWorld told us */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>What MakerWorld told us</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <p>{data.problemContext.headline}</p>
              <p className="text-xl text-white font-medium">{data.problemContext.challenge}</p>
              <p className="text-emerald-400 italic">"{data.problemContext.stat}"</p>
            </div>
            
            {/* Placeholder for visual */}
            <div className="mt-12 aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl flex items-center justify-center">
              <p className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                [Visual placeholder: Screenshot of MakerWorld review system showing misdirected reviews]
              </p>
            </div>
          </motion.div>
        </section>

        {/* So, what exactly is the problem? */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.research.title}</h2>
            <p className="text-xl text-gray-400 mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.research.subtitle}</p>
            
            {/* Research Methods */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {data.research.methods.map((method, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6">
                  <div className="text-4xl mb-3">{method.icon}</div>
                  <h4 className="font-bold mb-2 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>{method.title}</h4>
                  <p className="text-sm text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{method.detail}</p>
                </div>
              ))}
            </div>
            
            {/* Research Summary Visual Placeholder */}
            <div className="mb-16 aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl flex items-center justify-center">
              <p className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                [Visual placeholder: Research summary visualization showing findings]
              </p>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>I found that new users have to do the most work in the least motivating phase of their journey.</h3>
            <p className="text-lg text-gray-300 mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>But why?</p>
            
            {/* Findings Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {data.research.findings.map((finding, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6 text-center">
                  <div className="text-5xl font-bold text-emerald-400 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{finding.stat}</div>
                  <div className="text-sm font-bold text-emerald-300 uppercase mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{finding.label}</div>
                  <p className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{finding.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-emerald-900/30 border-l-4 border-emerald-500 rounded-r-xl p-6 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              <p className="text-lg italic text-emerald-100" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>"{data.research.insight}"</p>
            </div>
          </motion.div>
        </section>

        {/* Pain Points */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-12" style={{ fontFamily: "'Sora', sans-serif" }}>Pain Point #{data.painPoints[0].number}</h2>
            
            {data.painPoints.map((point, i) => (
              <div key={i} className="mb-24">
                <h3 className="text-3xl font-bold mb-4 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>
                  There is {point.title.toLowerCase()}
                </h3>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {point.description}
                </p>
                <p className="text-gray-400 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {point.detail}
                </p>
                
                {/* Visual Placeholder */}
                <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl flex items-center justify-center mb-8">
                  <p className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    [Visual placeholder: {point.visual}]
                  </p>
                </div>
                
                {i < data.painPoints.length - 1 && (
                  <>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-12 mt-20" style={{ fontFamily: "'Sora', sans-serif" }}>Pain Point #{data.painPoints[i + 1].number}</h2>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </section>

        {/* Synthesis */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>{data.synthesis.title}</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <p>{data.synthesis.insight}</p>
              <p className="text-xl text-white font-medium">{data.synthesis.hypothesis}</p>
              <p>{data.synthesis.focus}</p>
            </div>
          </motion.div>
        </section>

        {/* Mapping intervention points */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>{data.interventionPoints.title}</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {data.interventionPoints.description}
            </p>
            
            <div className="space-y-4 mb-8">
              {data.interventionPoints.points.map((point, i) => (
                <div key={i} className="flex gap-4 text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span className="text-emerald-400 font-bold">{i + 1}.</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            
            {/* Journey Map Placeholder */}
            <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl flex items-center justify-center">
              <p className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                [Visual placeholder: {data.interventionPoints.visual}]
              </p>
            </div>
          </motion.div>
        </section>

        {/* Ideation */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.ideation.title}</h2>
            <p className="text-xl text-gray-400 mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.ideation.subtitle}</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {data.ideation.concepts.map((concept, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-4">
                  <p className="text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{concept}</p>
                </div>
              ))}
            </div>
            
            {/* Ideation Board Placeholder */}
            <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl flex items-center justify-center">
              <p className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                [Visual placeholder: {data.ideation.visual}]
              </p>
            </div>
          </motion.div>
        </section>

        {/* The Attribution Concept */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>{data.attributionConcept.title}</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <p>{data.attributionConcept.description}</p>
              <p>{data.attributionConcept.explanation}</p>
            </div>
            
            {/* Concept Diagram Placeholder */}
            <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl flex items-center justify-center">
              <p className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                [Visual placeholder: {data.attributionConcept.visual}]
              </p>
            </div>
          </motion.div>
        </section>

        {/* Going back to users */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.userTesting.title}</h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {data.userTesting.description}
            </p>
            <p className="text-gray-400 mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {data.userTesting.feedback}
            </p>
            
            <div className="space-y-16">
              {data.userTesting.versions.map((version, i) => (
                <div key={i}>
                  <h4 className="text-2xl font-bold mb-4 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>{version.version}</h4>
                  <p className="text-gray-300 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{version.approach}</p>
                  <p className="text-sm text-gray-400 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{version.learning}</p>
                  
                  {/* Wireframe Placeholder */}
                  <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      [Visual placeholder: {version.visual}]
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Our Solution */}
        <section id="solution" className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.solution.title}</h2>
            
            {/* Current State Placeholder */}
            <div className="mb-12">
              <p className="text-lg text-gray-400 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>This is what MakerWorld reviews look like now.</p>
              <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl flex items-center justify-center">
                <p className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  [Visual placeholder: Current MakerWorld review interface]
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-gray-400 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>This is what I imagine it to be.</p>
              <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl flex items-center justify-center">
                <p className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  [Visual placeholder: New review interface with attribution system]
                </p>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-8 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>{data.solution.introduction}</h3>
            <p className="text-lg text-gray-300 mb-16 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {data.solution.description}
            </p>
            
            {/* Features */}
            <div className="space-y-24">
              {data.solution.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Image */}
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/20">
                      <img src={feature.visual} alt={feature.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full mb-4 border border-emerald-500/30" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {feature.impact}
                    </div>
                    <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{feature.title}</h3>
                    <div className="space-y-4 text-gray-300 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      <div>
                        <span className="text-red-400 font-semibold">Problem: </span>
                        {feature.problem}
                      </div>
                      <div>
                        <span className="text-emerald-400 font-semibold">Solution: </span>
                        {feature.solution}
                      </div>
                    </div>
                    <div className="p-4 bg-emerald-900/20 border-l-4 border-emerald-500 rounded shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      <p className="text-sm text-emerald-300 font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{feature.highlight}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Insights answered */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-12" style={{ fontFamily: "'Sora', sans-serif" }}>{data.insightsAnswered.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.insightsAnswered.mappings.map((mapping, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6">
                  <div className="text-red-400 font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{mapping.problem}</div>
                  <div className="text-emerald-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>→ {mapping.solution}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Wishes */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-12" style={{ fontFamily: "'Sora', sans-serif" }}>{data.wishes.title}</h2>
            <div className="space-y-8">
              {data.wishes.items.map((wish, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>{wish.title}</h3>
                  <p className="text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{wish.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Learnings */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-12" style={{ fontFamily: "'Sora', sans-serif" }}>{data.learnings.title}</h2>
            <div className="space-y-12">
              {data.learnings.items.map((learning, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-bold mb-4 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>{learning.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{learning.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-emerald-900/30">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Want to chat about this project?</h3>
          <a
            href="mailto:anthony.luong@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-emerald-900/30"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let's Talk <FiExternalLink />
          </a>
        </section>
      </div>
    </div>
  );
};

export default BambuLabCaseStudy;
