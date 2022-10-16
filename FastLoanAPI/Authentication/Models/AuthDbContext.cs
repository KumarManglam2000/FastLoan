using Microsoft.EntityFrameworkCore;

namespace AuthenticationService.Models
{
    public class AuthDbContext : DbContext
    {
        public AuthDbContext(DbContextOptions<AuthDbContext> options) : base(options)
        {
            Database.EnsureCreated();

        }
        //Define a Dbset for User in the database
        public DbSet<UserLoginInfo>? Users { get; set; }
    }
}
