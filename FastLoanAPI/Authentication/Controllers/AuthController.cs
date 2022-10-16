using AuthenticationService.Exceptions;
using AuthenticationService.Models;
using AuthenticationService.Services;
using Microsoft.AspNetCore.Mvc;

namespace AuthenticationService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        readonly IAuthService authService;
        readonly ITokenGeneratorService tokenGeneratorService;
        public AuthController(IAuthService _authService, ITokenGeneratorService _tokenGeneratorService)
        {
            authService = _authService;
            tokenGeneratorService = _tokenGeneratorService;
        }

        [HttpPost]
        [Route("register")]
        public IActionResult RegisterUser(UserLoginInfo user)
        {
            try
            {
                bool addUserSuccess = authService.RegisterUser(user);
                return Created("api/auth/create", user);
            }
            catch (UserAlreadyExistException uaee)
            {
                return Conflict(uaee.Message);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Loginuser(UserLoginInfo user)
        {
            try
            {
                bool isUserLogedIn = authService.LoginUser(user);
                string UserToken = tokenGeneratorService.GenerateToken(user);
                if (isUserLogedIn)
                {
                    return Ok(UserToken);
                }
                else
                {
                    return Unauthorized("Invailid Useremail or Password");
                }
               
            }
            catch (UserNotFoundException unfe)
            {
                return Conflict(unfe.Message);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }

           
        }

        
    }
}
