using System.Runtime.Serialization;

namespace RecommendationService.Exceptions
{
    [Serializable]
    internal class NoLoanofferInThisLenderException : Exception
    {
        public NoLoanofferInThisLenderException()
        {
        }

        public NoLoanofferInThisLenderException(string message) : base(message)
        {
        }

        public NoLoanofferInThisLenderException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected NoLoanofferInThisLenderException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
