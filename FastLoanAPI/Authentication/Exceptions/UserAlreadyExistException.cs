namespace AuthenticationService.Exceptions
{
    public class UserAlreadyExistException : Exception
    {
        public UserAlreadyExistException()
        {

        }
        public UserAlreadyExistException(string msg) : base(msg)
        {

        }
        
    }
}
