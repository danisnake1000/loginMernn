import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { 
    String, 
    required: true 
},
  description: { 
    String, 
    required: true 
},
  date: {
    type: Date,
    default: Date.now,
  },
  
},{timestamps:true});

export default mongoose.model('Task', taskSchema);