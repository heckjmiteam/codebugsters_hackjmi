// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export default async function (req, res) {
  
//   const completion = await openai.createCompletion({
//     model: 'text-davinci-003',
//     prompt: req.body.message,
//     temperature: 0.6,
//     max_tokens: 750,
//   });
//   res.status(200).json({ result: completion.data.choices[0].text });
// }