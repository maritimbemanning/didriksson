export default function ProcessA() {
  const steps = [
    {
      title: '1. Gratis møte (15-20 min)',
      customer: 'Du forteller om behovet ditt, hva som skal løses',
      we: 'Vi foreslår løsning og gir veiledende pris'
    },
    {
      title: '2. Tilbud med fastpris',
      customer: 'Du godkjenner tilbudet eller ber om justeringer',
      we: 'Vi sender én side med konkret beskrivelse og fastpris'
    },
    {
      title: '3. Vi bygger løsningen',
      customer: 'Du får se underveis og gir tilbakemelding',
      we: 'Vi holder deg oppdatert og gjør endringer etter avtale'
    },
    {
      title: '4. Ferdig og klart til bruk',
      customer: 'Du tar i bruk og bestemmer om du vil ha vedlikehold',
      we: 'Vi publiserer, viser hvordan det fungerer og tilbyr støtte'
    },
  ];

  return (
    <section className='space-y-6'>
      <div>
        <h2 className='text-2xl font-semibold mb-2'>Hvordan det fungerer</h2>
        <p className='text-neutral-600'>Enkel prosess fra første møte til ferdig løsning</p>
      </div>
      <ol className='space-y-4'>
        {steps.map((step, idx) => (
          <li key={idx} className='border border-neutral-200 rounded-2xl p-6 space-y-3'>
            <h3 className='font-semibold text-lg'>{step.title}</h3>
            <div className='grid md:grid-cols-2 gap-4 text-sm'>
              <div>
                <p className='font-medium text-neutral-700 mb-1'>✓ Du:</p>
                <p className='text-neutral-600'>{step.customer}</p>
              </div>
              <div>
                <p className='font-medium text-neutral-700 mb-1'>✓ Vi:</p>
                <p className='text-neutral-600'>{step.we}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}