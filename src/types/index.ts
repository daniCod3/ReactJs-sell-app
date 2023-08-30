export type Guitar = {
    id: string
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}

// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }
// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }

