export const fetchUserName = async (req, res) =>{
    try {
        const userId = req.body.userId;
        const user = await User.findById(userId);
        console.log(userId);
        res.status(200).json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      } 
  } 
  
  export const fetchUserImg = async (req, res) =>{
    try {
      const userId = req.body.userId;
      const user = await User.findOne({_id: userId});
      console.log(userId);
      res.status(200).json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
  } 
  
  export const fetchAllStories = async (req, res) =>{
    try {
      const stories =  await Stories.find();
  
      res.status(200).json(stories);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
  } 