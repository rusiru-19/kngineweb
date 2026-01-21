
import React from 'react';

const Sponsors: React.FC = () => {
  const sponsors = [
    ' ','Create', 'Explore', 'Expand', 'Conquer', ' '
  ];

  return (
    <section id="sponsors" className="py-20">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 px-8">
        {sponsors.map((name) => (
          <div key={name} className="text-[#6B7280] text-2xl font-bold tracking-tighter opacity-40 hover:opacity-100 transition-opacity cursor-default grayscale">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
