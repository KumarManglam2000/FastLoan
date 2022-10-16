using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserService.Models;

namespace UserService.Service
{
    public interface IMBService
    {
        MBRegistration RegisterUser(MBRegistration user);
        MBRegistration UpdateUser(string userEmail, MBRegistration user);
        MBRegistration GetUserByEmail(string userEmail);
    }
}