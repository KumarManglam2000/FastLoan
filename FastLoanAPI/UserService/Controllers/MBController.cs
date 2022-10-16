using System;
using System.Diagnostics;
using System.Net;
using System.Text.Json;
using Confluent.Kafka;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserService.Exceptions;
using UserService.Models;
using UserService.Service;

namespace UserService.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class MBController : ControllerBase
    {
        internal readonly IMBService _userService;

        private readonly string bootstrapServers = "localhost:9092";
        private readonly string topic = "test6";
        public MBController(IMBService userService)
        {
            _userService = userService;
        }
        private async Task<bool> SendDoctorRequest
        (string topic, string message)
        {
            ProducerConfig config = new ProducerConfig
            {
                BootstrapServers = bootstrapServers,
                ClientId = Dns.GetHostName()
            };

            try
            {
                using (var producer = new ProducerBuilder
                <Null, string>(config).Build())
                {
                    var result = await producer.ProduceAsync
                    (topic, new Message<Null, string>
                    {
                        Value = message
                    });

                    Debug.WriteLine($"Delivery Timestamp:{result.Timestamp.UtcDateTime}");
                    return await Task.FromResult(true);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error occured: {ex.Message}");
            }

            return await Task.FromResult(false);
        }

        [HttpPost]
        [Route("")]
        public IActionResult Registeruser(MBRegistration user)
        {
            try
            {
                MBRegistration isAddusersuccess = _userService.RegisterUser(user);
                UserDto userDto = new UserDto();
                userDto.UserEmail = user.Email;
                userDto.Password = user.Password;
                userDto.Role = "Borrower";
                string message = JsonSerializer.Serialize(userDto);
                Console.WriteLine(message);
                SendDoctorRequest(topic, message);
                return Created("created", isAddusersuccess);

            }
            catch (UserNotCreatedException unce)
            {
                return Conflict(unce.Message);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpPut]
        [Route("{Email}")]
        public IActionResult UpdateUser(String Email, MBRegistration user)
        {
            try
            {
                MBRegistration updateStatus = _userService.UpdateUser(Email, user);

                return Ok(updateStatus);

            }
            catch (UserNotFoundException unfx)
            {
                return NotFound(unfx.Message);
            }
        }


        [HttpGet]
        [Route("{Email}")]
        public ActionResult FindUser(String Email)
        {
            try
            {
                MBRegistration user = _userService.GetUserByEmail(Email);
                return Ok(user);
            }
            catch (UserNotFoundException unfx)
            {
                return NotFound(unfx.Message);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }
    }
}
