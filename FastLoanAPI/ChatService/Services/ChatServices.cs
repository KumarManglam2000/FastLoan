using ChatService.ExceptionHandling;
using ChatService.Model;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ChatService.Services
{
    public class ChatServices
    {

        readonly IMongoCollection<Chat> _chat;
        public ChatServices(IOptions<ChatDatabaseSetting> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.DatabaseName);

            _chat = database.GetCollection<Chat>(settings.Value.ChatCollectionName);

        }

        internal Chat CreateChat(Chat chat)
        {
            Chat isChatIdexits = _chat.Find(n => n.Id == chat.Id).FirstOrDefault();
            if (isChatIdexits == null)
            {

                _chat.InsertOne(chat);
                return chat;
            }
            else
                throw new ChatNotFoundException($"Message with id: {chat.Id} Already exists");
        }

        internal List<Chat> GetChat()
        {
            return _chat.Find(_ => true).ToList();
        }

       // internal Chat UpdateChat(string id, Chat chat)
        //{
         //   Chat isExits = (Chat)GetChat(id);
        //    if (isExits != null)
        //    {

        //        _chat.ReplaceOne(chat => chat.Id == id, chat);
           //     return chat;
        //    }
          //  else
          //      throw new ChatNotFoundException($"Message with id: {id} does not exists");
       // }

        internal object GetChat(string id)
        {
            Chat isChatByIdexits = _chat.Find(n => n.Id == id).FirstOrDefault();
            if (isChatByIdexits != null)
            {
                return isChatByIdexits;
            }
            else
                throw new ChatNotFoundException($"Message with id: {id} does not exists");
        }

        internal bool DeleteChat(string id)
        {
            Chat isExits = (Chat)GetChat(id);
            if (isExits != null)
            {

                _chat.DeleteOne(r => r.Id == id);
                return true;
            }
            else
                throw new ChatNotFoundException($"Message with id: {id} does not exists");
        }
    }
}