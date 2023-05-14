import Center from '@/components/center/Center'
import Results from '@/components/results/Results'

type SearchResult = {
  number: number,
  id: string,
  turn: number,
  petitioner: string,
  address: string
}

const results: SearchResult[] = [
  {
    number: 10,
    id: '1003-ab',
    turn: 45,
    petitioner: 'María Reyes Saavedra',
    address: 'Av Jardines No 941 Col Lindavista'
  },
  {
    number: 23,
    id: '1023-ba',
    turn: 89,
    petitioner: 'Roberto Martínez Ojeda',
    address: 'Niños Héroes 302 Col Progreso'
  },
  {
    number: 89,
    id: '1089-ab',
    turn: 90,
    petitioner: 'Martín León Bocanegra',
    address: 'Otumba 23 Col Ojo de Agua'
  },
]

// TODO: Aquí se debe de hacer fetch de los resultados de la búsqueda
export default function SearchResultsPage() {
  return (
    <Center>
      <Results results={results}/>
    </Center>
  )
}
