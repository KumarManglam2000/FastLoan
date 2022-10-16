namespace LoanService.ExceptionHandling
{
   
        public class LoanOfferNotFoundException : ApplicationException
        {
            
            public LoanOfferNotFoundException(string message) : base(message)
            {
            }
        }
    
}
