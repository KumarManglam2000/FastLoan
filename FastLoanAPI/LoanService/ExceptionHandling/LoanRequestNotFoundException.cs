namespace LoanService.ExceptionHandling
{
    
        public class LoanRequestNotFoundException : Exception
        {
       

        public LoanRequestNotFoundException(string message) : base(message)
            {
            }
        }
    
}
