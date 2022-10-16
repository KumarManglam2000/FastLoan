using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserService.Models;

namespace UserService.Service
{
    public interface IMLService
    {
        MLRegistration RegisterUser(MLRegistration user);
        MLRegistration UpdateUser(string userEmail, MLRegistration user);
        MLRegistration GetUserByEmail(string userEmail);
    }
}