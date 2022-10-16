using APIGateway.AuthenticationService.Repository;
using AuthenticationService.Exceptions;
using AuthenticationService.Models;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AuthenticationService.Services
{
    public class TokenGeneratorService : ITokenGeneratorService
    {
        private readonly IMLRepository mlRepository;
        public TokenGeneratorService(IMLRepository _mlRepository)
        {
            mlRepository = _mlRepository;
        }

        public string GenerateToken(UserLoginInfo user)
        {
            Claim[] userclaims =
            {
                new Claim(JwtRegisteredClaimNames.Jti, new Guid().ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, user.UserEmail)
            };
            string secretKey = "amamamamamamaamamamamaaa";
            byte[] secretKeyInBytes = Encoding.UTF8.GetBytes(secretKey);
            SymmetricSecurityKey symmetricSecurityKey = new SymmetricSecurityKey(secretKeyInBytes);
            SigningCredentials usersigningCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);
            JwtSecurityToken token = new JwtSecurityToken(
                  issuer: "AuthenticationAPI",
                audience: "ProductAPI",
                signingCredentials: usersigningCredentials,
                expires: DateTime.UtcNow.AddMinutes(10),
                claims: userclaims
                );

            JwtSecurityTokenHandler JwtSecurityTokenHandlerhandler = new JwtSecurityTokenHandler();
            return JsonConvert.SerializeObject(new { token = JwtSecurityTokenHandlerhandler.WriteToken(token) });

        }
    }
}
