import { Coord } from "@prisma/client"

export class CreateRouteDto {
  id: string
  name: string
  source: Coord
  destination: Coord
}

