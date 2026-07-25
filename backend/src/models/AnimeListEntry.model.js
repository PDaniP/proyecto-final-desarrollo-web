import mongoose from "mongoose";

const userListSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    animeCompletado: [{
        animeid: {
            type: Number,
            required: true
        },
        animeTitle: {
            type: String,
            required: true
        },
        animeCoverImage: {
            type: String,
            required: true
        },    
    }],
    animeEnProgreso: [{
        animeid: {
            type: Number,
            required: true
        },
        animeTitle: {
            type: String,
            required: true
        },
        animeCoverImage: {
            type: String,
            required: true
        },    
    }],
    animePlanToWatch: [{
        animeid: {
            type: Number,
            required: true
        },
        animeTitle: {
            type: String,
            required: true
        },
        animeCoverImage: {
            type: String,
            required: true
        },    
    }],
    animeDropped: [{
        animeid: {
            type: Number,
            required: true
        },
        animeTitle: {
            type: String,
            required: true
        },
        animeCoverImage: {
            type: String,
            required: true
        },    
    }],

});     
export const UserList = mongoose.model('UserList', userListSchema);