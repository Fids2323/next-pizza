import { Ingredient } from "@prisma/client"
import { axiosInstance } from "./instance"
import { ApiRotes } from "./constants"

export const getAll = async(): Promise<Ingredient[]> => {
    const {data} = await axiosInstance.get<Ingredient[]>(ApiRotes.				SEARCH_INGREDIENTS)
    return data
}