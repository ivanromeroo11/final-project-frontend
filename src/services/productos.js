export const productos = (client) => async () => {
    
    try {
        const { data: response } = await client.get( '/products/products' );
        console.info( '=>  Data: ', response );
        return response.data;
    } catch (error) {
        console.info( 'error:', error.message );
        return null;
    }
};