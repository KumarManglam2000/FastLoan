namespace LoanService.ExceptionHandling
{
   
        public class LoanNotFoundException : ApplicationException
        {
            
            public LoanNotFoundException(string message) : base(message)
            {
            }
        }
    
}
