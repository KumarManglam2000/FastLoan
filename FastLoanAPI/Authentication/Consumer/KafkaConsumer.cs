using APIGateway.AuthenticationService.Repository;
using AuthenticationService.Models;
using AuthenticationService.Services;

namespace AuthenticationService.Consumer
{
    public class KafkaConsumer
    {
        private readonly IServiceProvider _serviceProvider;

        public KafkaConsumer(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task OnMessageReceived(UserLoginInfo user)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var service = scope.ServiceProvider.GetRequiredService<IMLRepository>();
                service.CreateUser(user);
            }


        }
    }
}
