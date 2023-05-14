import Center from '@/components/center/Center'
import Petition from "@/components/petition/Petition"

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

const getPetition = function (id: string, results: SearchResult[]): SearchResult | undefined {
  return results.find(result => result.id === id)
}

export default function PetitionsIdPage({ params }: {
  params: {
    id: string
  }
}) {
  const petition: SearchResult | undefined = getPetition(params.id, results);

	return (
    <Center>
      {
        petition && <Petition petition={petition}/> || <p>not found</p>
      }
    </Center>
	)
}
