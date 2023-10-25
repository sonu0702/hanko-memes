# Hanko Memes

- It is an AI-based fun project which lets anyone create memes.
- This project is part of a hackathon to create any functioning app that can be hosted online with Hanko auth integrated.
- In this project OpenAI chat completion model generates a caption given a topic and audience.
- Once the caption is generated user can use a meme template to add the generated caption thus producing a sharable meme.
- Technologies: NextJs, Hanko Authentication, Supabase, ui.shadcn


## Run the project

### Install all packages
```bash
   yarn install
```
### .env file , generate your [hanko api url](https://docs.hanko.io/setup-hanko-cloud) 
```bash
   copy content of .env.example into .env
```

### Run the server
```bash
   npm run dev
```

The application connects with backend server deployed on Netlify.
You can find code [hanko-memes-be] (https://github.com/sonu0702/hanko-memes-be)
If you want to check out just the frontend integration of 
Hanko Authentication just explore frontend repo [hanko-memes](https://github.com/sonu0702/hanko-memes)

For the frontend integration of the Hanko Authentication I used [hanko-nextjs-starter](https://github.com/teamhanko/hanko-nextjs-starter). It is very helpfull and I would recomment this since it will give clear picture of authentication flow. The other which developers has is [Hanko documentation](https://docs.hanko.io/quickstarts/frontend/react).