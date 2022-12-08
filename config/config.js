const config = {
    local: {
        DB: {
            HOST: "localhost",
            PORT: 27017,
            DATABASE: "test",
            MOONGOOSE: {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            },
            USERNAME: "",
            PASSWORD: ""
        },
        PORTNO:8201,
    }
}
export const get = function get(env){
return config [env];
}