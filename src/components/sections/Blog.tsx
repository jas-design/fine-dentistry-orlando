import { motion } from "motion/react";

export const Blog = () => {
  const posts = [
    {
      title: "5 Tips for Brighter Teeth",
      excerpt: "Discover simple habits you can adopt daily to maintain a pearly white smile...",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "The Truth About Invisalign",
      excerpt: "Everything you need to know about starting your clear aligner journey...",
      date: "June 2, 2024",
      image: "https://images.unsplash.com/photo-1583307567825-4c6e9a6e1470?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Why Regular Exams Matter",
      excerpt: "Prevention is better than cure. Learn why bi-annual visits are essential...",
      date: "June 10, 2024",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="bg-white">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Blog</span>
            <h2 className="text-4xl md:text-5xl mt-4">Latest Insights & Oral Care Tips</h2>
          </div>
          <button className="text-primary font-bold hover:underline">View All Posts →</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-[32px] overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-primary shadow-sm">
                   {post.date}
                </div>
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 line-clamp-2">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
