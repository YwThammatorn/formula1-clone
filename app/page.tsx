import Image from "next/image";

interface Driver{
  driver_number: number,
  meeting_key: number,
  session_key: number,
  first_name: string,
  last_name: string,
  country_code: string,
  team_name: string
}

export default async function Home() {
  const response = await fetch(
    'https://api.openf1.org/v1/drivers?session_key=latest'
  ).then((response) => response.json())
  const data : Driver[] = await response

  const teams = () => {
    return [...new Set(data.map(prev => prev.team_name))]
  }

  return (
    <div className="flex items-center justify-center">
      <ul>
         {teams().map((content,index) => {
          return (
            <li key={index}> {content} :
              <ul>
                {data.filter(prev => prev.team_name == content).map((driver,index) => {
                  return (
                    <li key={driver.driver_number}>{driver.first_name} {driver.last_name}</li>
                  )
                })}
              </ul>
            </li>
          )
         })}
      </ul>
    </div>
  );
}
