
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace AuthenticationService.Models
{
    public class UserLoginInfo
    {
        [JsonIgnore]
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        public string? UserEmail { get; set; }
        public string? Password { get; set; }
        public string? Role { get; set; }
    }
}
