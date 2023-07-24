import { produc } from "../services";
import { useQuery } from "react-query";

export const useProducts = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: produc.productos
     })
     return { data, isLoading }
};