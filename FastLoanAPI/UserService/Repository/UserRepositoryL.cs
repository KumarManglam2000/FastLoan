using System;
using System.Linq;
using MongoDB.Driver;
using UserService.Models;

namespace UserService.Repository
{
    public class UserRepositoryL : IUserRepositoryL
    {
        //define a private variable to represent UserContext
        readonly DBContextL context;
        public UserRepositoryL(DBContextL _context)
        {
            context = _context;
        }

        //This method is used to register a new user
        public MLRegistration RegisterUser(MLRegistration user)
        {
            context.Users.InsertOne(user);
            return user;
        }

        //This method should be used to get an existing user
        public MLRegistration GetUserByEmail(string userEmail)
        {
            return context.Users.Find(u => u.Email == userEmail).FirstOrDefault();
        }

        //This method is used to update an existing user
        public MLRegistration UpdateUser(string userEmail, MLRegistration user)
        {
            MLRegistration IsExist=GetUserByEmail(userEmail);
            if(IsExist!=null)
            {
                context.Users.ReplaceOne(u => u.Email == userEmail, user);
                return user;
            }
            else
            {
                return null;
            }
        }
    }
}