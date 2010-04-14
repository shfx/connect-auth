describe 'Express'
  before_each
    AuthStrategy= require('express/plugins/auth.strategy.base').AuthStrategy
    Anonymous= require('express/plugins/auth.strategies/anonymous').Anonymous
  end
  describe 'Auth'
    describe 'Anonymous'
      describe 'when authenticated'
        it 'should always pass back a user object'
          var anonymousStrategy= new Anonymous();
          var u
          anonymousStrategy.authenticate( null, function(error, user) {
            u=user;
          });
          u.username.should_be 'anonymous'
        end
      end
      describe 'when constructed with a custom user'
        it 'should always pass back the custom user object'
          var anonymousUser= {username: 'test' }
          var anonymousStrategy= new Anonymous({"anonymousUser":anonymousUser});
          anonymousStrategy.authenticate( null, function(error, user) {
            u=user;
          });
          u.should.eql  anonymousUser
        end
      end
    end
  end
end