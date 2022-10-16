using System;
using UserService.Exceptions;
using UserService.Models;
using UserService.Repository;

namespace UserService.Service
{
    public class MBService : IMBService
    {
        readonly IUserRepository _userRepository;
        public MBService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        //login user
        public MBRegistration GetUserByEmail(string userEmail)
        {
            MBRegistration getByUserEmail = _userRepository.GetUserByEmail(userEmail);
            if (getByUserEmail != null)
            {
                return _userRepository.GetUserByEmail(userEmail);
            }
            else
            {
                throw new UserNotFoundException("This user id does not exist");
            }
        }

        //register user
        public MBRegistration RegisterUser(MBRegistration user)
        {
            
            MBRegistration userExists = _userRepository.GetUserByEmail(user.Email);
            if (userExists == null)
            {
                return _userRepository.RegisterUser(user);
            }
            else
            {
                throw new UserNotCreatedException("This user id already exists");
            }
        }

        //update user
        public MBRegistration UpdateUser(string userEmail, MBRegistration user)
        {
            MBRegistration userUpdate = _userRepository.UpdateUser(userEmail, user);
            if (userUpdate!=null)
            {
                return userUpdate;
            }
            else
            {
                throw new UserNotFoundException("This user id does not exist");
            }
        }
    }
}

