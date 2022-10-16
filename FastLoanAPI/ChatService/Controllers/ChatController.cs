using ChatService.ExceptionHandling;
using ChatService.Model;
using ChatService.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChatService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly ChatServices _chatService;

        public ChatController(ChatServices chatService)
        {
            _chatService = chatService;
        }

        [HttpPost]
        public ActionResult ChatCreate(Chat chat)
        {

            try
            {
                Chat _chat = _chatService.CreateChat(chat);
                return Created("api/Chat/created", _chat);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        public ActionResult<List<Chat>> GetAllChat()
        {

            try
            {
                List<Chat> _chat = _chatService.GetChat();
                return Ok(_chat);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

       // [HttpPut]
      //  public ActionResult UpdateChat(string Id, Chat chat)
      //  {

        //    try
        //    {
         //       Chat _chat = _chatService.UpdateChat(Id, chat);
          //      return Ok(_chat);

          //  }
          //  catch (ChatNotFoundException u)
          //  {
           //     return NotFound(u.Message);
           // }
      //  }


        [HttpDelete]
        [Route("{Id}")]
        public ActionResult DeleteChat(string Id)
        {

            try
            {
                var Request = _chatService.GetChat(Id);
                if (Request == null)
                {
                    return NotFound();
                }
                else
                {
                    bool isdeletesuccess = _chatService.DeleteChat(Id);
                    return Ok(isdeletesuccess);
                }

            }
            catch (ChatNotFoundException u)
            {
                return NotFound(u.Message);
            }
        }
    }
}
