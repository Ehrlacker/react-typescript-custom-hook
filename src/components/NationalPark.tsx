import { ParkReturnData } from '../types'

type ParkProps = {
  Parks?: ParkReturnData | null;
}

const NationalPark = ({ Parks }: ParkProps) => {
  return (
    <div>
      {Parks?.data?.map((Park) => (
        <div key={Park.id}>{Park.fullName}</div>
      ))}
    </div>
  )
}

export default NationalPark
