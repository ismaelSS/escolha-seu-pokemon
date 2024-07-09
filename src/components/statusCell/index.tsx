import { StatusCellStyle } from "./styles";

interface iStatusCell {
  value: number
  statusName: string
  className: string
}

export default function StatusCell({value, statusName, className}: iStatusCell) {
  return(
    <StatusCellStyle className={className}>
      <p className="status">{value}</p>
      <div className="line"/>
      <p className="status">{statusName}</p>
    </StatusCellStyle>
  )
}
