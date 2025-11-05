export default function CaseA(){
  const cases=[
    {
      t:'Bluecrew – maritim bemanning',
      d:'Nettside som gjør det enkelt for rederier å finne og bestille kvalifisert mannskap.',
      url:'https://www.bluecrew.no/',
      impact:'3× flere henvendelser fra nye kunder',
      time:'Ferdig på 10 dager'
    },
    {
      t:'Bluecrew Admin – HMS & automasjon',
      d:'Internt verktøy som sparer 5 timer administrasjon hver uke.',
      url:'https://bluecrew-admin-4xm6idalg-isak-didrikssons-projects.vercel.app/',
      impact:'85% mindre manuelt arbeid',
      time:'Ferdig på 14 dager'
    },
  ];
  
  return(
    <section className='space-y-4'>
      <h2 className='text-2xl font-semibold'>Tidligere prosjekter</h2>
      
      <div className='grid md:grid-cols-2 gap-4'>
        {cases.map(c=>(
          <a 
            key={c.t} 
            href={c.url} 
            className='group border border-neutral-200 rounded-2xl p-5 hover:border-ocean hover:shadow-md transition-all' 
            target='_blank' 
            rel='noopener noreferrer'
          >
            <h3 className='font-semibold group-hover:text-ocean transition-colors'>{c.t}</h3>
            <p className='text-sm text-neutral-600 mt-2'>{c.d}</p>
            
            <div className='mt-4 pt-4 border-t border-neutral-100 space-y-2'>
              <div className='flex items-center gap-2 text-sm'>
                <span className='text-green-600'>✓</span>
                <span className='font-medium'>{c.impact}</span>
              </div>
              <div className='flex items-center gap-2 text-sm text-neutral-600'>
                <span>⏱️</span>
                <span>{c.time}</span>
              </div>
            </div>
            
            <div className='flex items-center gap-2 text-sm text-ocean mt-3 group-hover:gap-3 transition-all'>
              <span>Se nettside</span>
              <span>→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 