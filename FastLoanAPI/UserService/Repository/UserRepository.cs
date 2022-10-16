using System;
using System.Linq;
using MongoDB.Driver;
using UserService.Models;

namespace UserService.Repository
{
    public class UserRepository : IUserRepository
    {
        //define a private variable to represent UserContext
        readonly DBContext context;
        public UserRepository(DBContext _context)
        {
            context = _context;
        }

        //This method is used to register a new user
        public MBRegistration RegisterUser(MBRegistration user)
        {
            context.Users.InsertOne(user);
            return user;
        }

        //This method should be used to get an existing user
        public MBRegistration GetUserByEmail(string userEmail)
        {
            return context.Users.Find(u => u.Email == userEmail).FirstOrDefault();
        }

        //This method is used to update an existing user
        public MBRegistration UpdateUser(string userEmail, MBRegistration user)
        {
            MBRegistration isExist = GetUserByEmail(userEmail);
            if (isExist != null)
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