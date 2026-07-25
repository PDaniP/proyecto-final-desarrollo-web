import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    mangaList: {
        mangaCompletado: [{
            mangaid: {
                type: Number,
                required: true
            },
            mangaTitle: {
                type: String,
                required: true
            },
            mangaCoverImage: {
                type: String,
                required: true
            }
        }],
        mangaEnProgreso: [{
            mangaid: {
                type: Number,
                required: true
            },
            mangaTitle: {
                type: String,
                required: true
            },
            mangaCoverImage: {
                type: String,
                required: true
            }
        }],
        mangaPlanToRead: [{
            mangaid: {
                type: Number,
                required: true
            },
            mangaTitle: {
                type: String,
                required: true
            },
            mangaCoverImage: {
                type: String,
                required: true
            }
        }],
        mangaDropped: [{
            mangaid: {
                type: Number,
                required: true
            },
            mangaTitle: {
                type: String,
                required: true
            },
            mangaCoverImage: {
                type: String,
                required: true
            }
        }]
    }
  },
    {
        timestamps: true
    }
);


const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;