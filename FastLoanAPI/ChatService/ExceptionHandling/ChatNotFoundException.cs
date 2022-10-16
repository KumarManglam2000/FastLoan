namespace ChatService.ExceptionHandling
{
    public class ChatNotFoundException : ApplicationException
    {
        public ChatNotFoundException()
        {
        }

        public ChatNotFoundException(string message) : base(message)
        {
        }
    }
}
