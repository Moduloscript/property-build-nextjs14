import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //   To added new or different users at intervals
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    ],
    
    callbacks: {
        // Invoked on successful sign in
        async signIn(user, account, profile) {
            //Connect to the database

            // Check if user exists

            // if not check user to the database

            // Return true to allow sign in
         },

        // Modifies the session object
        async session(session) {
        //    Get user from the database

            // Assign user id to the session

            // return session
        }
    }
};
