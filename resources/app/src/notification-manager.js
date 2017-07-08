(function() {
  var Emitter, Notification, NotificationManager;

  Emitter = require('event-kit').Emitter;

  Notification = require('../src/notification');

  module.exports = NotificationManager = (function() {
    function NotificationManager() {
      this.notifications = [];
      this.emitter = new Emitter;
    }


    /*
    Section: Events
     */

    NotificationManager.prototype.onDidAddNotification = function(callback) {
      return this.emitter.on('did-add-notification', callback);
    };


    /*
    Section: Adding Notifications
     */

    NotificationManager.prototype.addSuccess = function(message, options) {
      return this.addNotification(new Notification('success', message, options));
    };

    NotificationManager.prototype.addInfo = function(message, options) {
      return this.addNotification(new Notification('info', message, options));
    };

    NotificationManager.prototype.addWarning = function(message, options) {
      return this.addNotification(new Notification('warning', message, options));
    };

    NotificationManager.prototype.addError = function(message, options) {
      return this.addNotification(new Notification('error', message, options));
    };

    NotificationManager.prototype.addFatalError = function(message, options) {
      return this.addNotification(new Notification('fatal', message, options));
    };

    NotificationManager.prototype.add = function(type, message, options) {
      return this.addNotification(new Notification(type, message, options));
    };

    NotificationManager.prototype.addNotification = function(notification) {
      this.notifications.push(notification);
      this.emitter.emit('did-add-notification', notification);
      return notification;
    };


    /*
    Section: Getting Notifications
     */

    NotificationManager.prototype.getNotifications = function() {
      return this.notifications.slice();
    };


    /*
    Section: Managing Notifications
     */

    NotificationManager.prototype.clear = function() {
      return this.notifications = [];
    };

    return NotificationManager;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9DOi9wcm9qZWN0cy9hdG9tL291dC9hcHAvc3JjL25vdGlmaWNhdGlvbi1tYW5hZ2VyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUMsVUFBVyxPQUFBLENBQVEsV0FBUjs7RUFDWixZQUFBLEdBQWUsT0FBQSxDQUFRLHFCQUFSOztFQU9mLE1BQU0sQ0FBQyxPQUFQLEdBQ007SUFDUyw2QkFBQTtNQUNYLElBQUMsQ0FBQSxhQUFELEdBQWlCO01BQ2pCLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBSTtJQUZKOzs7QUFJYjs7OztrQ0FVQSxvQkFBQSxHQUFzQixTQUFDLFFBQUQ7YUFDcEIsSUFBQyxDQUFBLE9BQU8sQ0FBQyxFQUFULENBQVksc0JBQVosRUFBb0MsUUFBcEM7SUFEb0I7OztBQUd0Qjs7OztrQ0EwQkEsVUFBQSxHQUFZLFNBQUMsT0FBRCxFQUFVLE9BQVY7YUFDVixJQUFDLENBQUEsZUFBRCxDQUFxQixJQUFBLFlBQUEsQ0FBYSxTQUFiLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLENBQXJCO0lBRFU7O2tDQXlCWixPQUFBLEdBQVMsU0FBQyxPQUFELEVBQVUsT0FBVjthQUNQLElBQUMsQ0FBQSxlQUFELENBQXFCLElBQUEsWUFBQSxDQUFhLE1BQWIsRUFBcUIsT0FBckIsRUFBOEIsT0FBOUIsQ0FBckI7SUFETzs7a0NBeUJULFVBQUEsR0FBWSxTQUFDLE9BQUQsRUFBVSxPQUFWO2FBQ1YsSUFBQyxDQUFBLGVBQUQsQ0FBcUIsSUFBQSxZQUFBLENBQWEsU0FBYixFQUF3QixPQUF4QixFQUFpQyxPQUFqQyxDQUFyQjtJQURVOztrQ0EyQlosUUFBQSxHQUFVLFNBQUMsT0FBRCxFQUFVLE9BQVY7YUFDUixJQUFDLENBQUEsZUFBRCxDQUFxQixJQUFBLFlBQUEsQ0FBYSxPQUFiLEVBQXNCLE9BQXRCLEVBQStCLE9BQS9CLENBQXJCO0lBRFE7O2tDQTJCVixhQUFBLEdBQWUsU0FBQyxPQUFELEVBQVUsT0FBVjthQUNiLElBQUMsQ0FBQSxlQUFELENBQXFCLElBQUEsWUFBQSxDQUFhLE9BQWIsRUFBc0IsT0FBdEIsRUFBK0IsT0FBL0IsQ0FBckI7SUFEYTs7a0NBR2YsR0FBQSxHQUFLLFNBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsT0FBaEI7YUFDSCxJQUFDLENBQUEsZUFBRCxDQUFxQixJQUFBLFlBQUEsQ0FBYSxJQUFiLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLENBQXJCO0lBREc7O2tDQUdMLGVBQUEsR0FBaUIsU0FBQyxZQUFEO01BQ2YsSUFBQyxDQUFBLGFBQWEsQ0FBQyxJQUFmLENBQW9CLFlBQXBCO01BQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsc0JBQWQsRUFBc0MsWUFBdEM7YUFDQTtJQUhlOzs7QUFLakI7Ozs7a0NBT0EsZ0JBQUEsR0FBa0IsU0FBQTthQUFHLElBQUMsQ0FBQSxhQUFhLENBQUMsS0FBZixDQUFBO0lBQUg7OztBQUVsQjs7OztrQ0FJQSxLQUFBLEdBQU8sU0FBQTthQUNMLElBQUMsQ0FBQSxhQUFELEdBQWlCO0lBRFo7Ozs7O0FBckxUIiwic291cmNlc0NvbnRlbnQiOlsie0VtaXR0ZXJ9ID0gcmVxdWlyZSAnZXZlbnQta2l0J1xuTm90aWZpY2F0aW9uID0gcmVxdWlyZSAnLi4vc3JjL25vdGlmaWNhdGlvbidcblxuIyBQdWJsaWM6IEEgbm90aWZpY2F0aW9uIG1hbmFnZXIgdXNlZCB0byBjcmVhdGUge05vdGlmaWNhdGlvbn1zIHRvIGJlIHNob3duXG4jIHRvIHRoZSB1c2VyLlxuI1xuIyBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGlzIGFsd2F5cyBhdmFpbGFibGUgYXMgdGhlIGBhdG9tLm5vdGlmaWNhdGlvbnNgXG4jIGdsb2JhbC5cbm1vZHVsZS5leHBvcnRzID1cbmNsYXNzIE5vdGlmaWNhdGlvbk1hbmFnZXJcbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQG5vdGlmaWNhdGlvbnMgPSBbXVxuICAgIEBlbWl0dGVyID0gbmV3IEVtaXR0ZXJcblxuICAjIyNcbiAgU2VjdGlvbjogRXZlbnRzXG4gICMjI1xuXG4gICMgUHVibGljOiBJbnZva2UgdGhlIGdpdmVuIGNhbGxiYWNrIGFmdGVyIGEgbm90aWZpY2F0aW9uIGhhcyBiZWVuIGFkZGVkLlxuICAjXG4gICMgKiBgY2FsbGJhY2tgIHtGdW5jdGlvbn0gdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBub3RpZmljYXRpb24gaXMgYWRkZWQuXG4gICMgICAqIGBub3RpZmljYXRpb25gIFRoZSB7Tm90aWZpY2F0aW9ufSB0aGF0IHdhcyBhZGRlZC5cbiAgI1xuICAjIFJldHVybnMgYSB7RGlzcG9zYWJsZX0gb24gd2hpY2ggYC5kaXNwb3NlKClgIGNhbiBiZSBjYWxsZWQgdG8gdW5zdWJzY3JpYmUuXG4gIG9uRGlkQWRkTm90aWZpY2F0aW9uOiAoY2FsbGJhY2spIC0+XG4gICAgQGVtaXR0ZXIub24gJ2RpZC1hZGQtbm90aWZpY2F0aW9uJywgY2FsbGJhY2tcblxuICAjIyNcbiAgU2VjdGlvbjogQWRkaW5nIE5vdGlmaWNhdGlvbnNcbiAgIyMjXG5cbiAgIyBQdWJsaWM6IEFkZCBhIHN1Y2Nlc3Mgbm90aWZpY2F0aW9uLlxuICAjXG4gICMgKiBgbWVzc2FnZWAgQSB7U3RyaW5nfSBtZXNzYWdlXG4gICMgKiBgb3B0aW9uc2AgKG9wdGlvbmFsKSBBbiBvcHRpb25zIHtPYmplY3R9IHdpdGggdGhlIGZvbGxvd2luZyBrZXlzOlxuICAjICAgICogYGJ1dHRvbnNgIChvcHRpb25hbCkgQW4ge0FycmF5fSBvZiB7T2JqZWN0fSB3aGVyZSBlYWNoIHtPYmplY3R9IGhhcyB0aGVcbiAgIyAgICAgIGZvbGxvd2luZyBvcHRpb25zOlxuICAjICAgICAgKiBgY2xhc3NOYW1lYCAob3B0aW9uYWwpIHtTdHJpbmd9IGEgY2xhc3MgbmFtZSB0byBhZGQgdG8gdGhlIGJ1dHRvbidzXG4gICMgICAgICAgIGRlZmF1bHQgY2xhc3MgbmFtZSAoYGJ0biBidG4tc3VjY2Vzc2ApLlxuICAjICAgICAgKiBgb25EaWRDbGlja2AgKG9wdGlvbmFsKSB7RnVuY3Rpb259IGNhbGxiYWNrIHRvIGNhbGwgd2hlbiB0aGUgYnV0dG9uXG4gICMgICAgICAgIGhhcyBiZWVuIGNsaWNrZWQuIFRoZSBjb250ZXh0IHdpbGwgYmUgc2V0IHRvIHRoZVxuICAjICAgICAgICB7Tm90aWZpY2F0aW9uRWxlbWVudH0gaW5zdGFuY2UuXG4gICMgICAgICAqIGB0ZXh0YCB7U3RyaW5nfSBpbm5lciB0ZXh0IGZvciB0aGUgYnV0dG9uXG4gICMgICAgKiBgZGVzY3JpcHRpb25gIChvcHRpb25hbCkgQSBNYXJrZG93biB7U3RyaW5nfSBjb250YWluaW5nIGEgbG9uZ2VyXG4gICMgICAgICBkZXNjcmlwdGlvbiBhYm91dCB0aGUgbm90aWZpY2F0aW9uLiBCeSBkZWZhdWx0LCB0aGlzICoqd2lsbCBub3QqKlxuICAjICAgICAgcHJlc2VydmUgbmV3bGluZXMgYW5kIHdoaXRlc3BhY2Ugd2hlbiBpdCBpcyByZW5kZXJlZC5cbiAgIyAgICAqIGBkZXRhaWxgIChvcHRpb25hbCkgQSBwbGFpbi10ZXh0IHtTdHJpbmd9IGNvbnRhaW5pbmcgYWRkaXRpb25hbCBkZXRhaWxzXG4gICMgICAgICBhYm91dCB0aGUgbm90aWZpY2F0aW9uLiBCeSBkZWZhdWx0LCB0aGlzICoqd2lsbCoqIHByZXNlcnZlIG5ld2xpbmVzXG4gICMgICAgICBhbmQgd2hpdGVzcGFjZSB3aGVuIGl0IGlzIHJlbmRlcmVkLlxuICAjICAgICogYGRpc21pc3NhYmxlYCAob3B0aW9uYWwpIEEge0Jvb2xlYW59IGluZGljYXRpbmcgd2hldGhlciB0aGlzXG4gICMgICAgICBub3RpZmljYXRpb24gY2FuIGJlIGRpc21pc3NlZCBieSB0aGUgdXNlci4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgIyAgICAqIGBpY29uYCAob3B0aW9uYWwpIEEge1N0cmluZ30gbmFtZSBvZiBhbiBpY29uIGZyb20gT2N0aWNvbnMgdG8gZGlzcGxheVxuICAjICAgICAgaW4gdGhlIG5vdGlmaWNhdGlvbiBoZWFkZXIuIERlZmF1bHRzIHRvIGAnY2hlY2snYC5cbiAgYWRkU3VjY2VzczogKG1lc3NhZ2UsIG9wdGlvbnMpIC0+XG4gICAgQGFkZE5vdGlmaWNhdGlvbihuZXcgTm90aWZpY2F0aW9uKCdzdWNjZXNzJywgbWVzc2FnZSwgb3B0aW9ucykpXG5cbiAgIyBQdWJsaWM6IEFkZCBhbiBpbmZvcm1hdGlvbmFsIG5vdGlmaWNhdGlvbi5cbiAgI1xuICAjICogYG1lc3NhZ2VgIEEge1N0cmluZ30gbWVzc2FnZVxuICAjICogYG9wdGlvbnNgIChvcHRpb25hbCkgQW4gb3B0aW9ucyB7T2JqZWN0fSB3aXRoIHRoZSBmb2xsb3dpbmcga2V5czpcbiAgIyAgICAqIGBidXR0b25zYCAob3B0aW9uYWwpIEFuIHtBcnJheX0gb2Yge09iamVjdH0gd2hlcmUgZWFjaCB7T2JqZWN0fSBoYXMgdGhlXG4gICMgICAgICBmb2xsb3dpbmcgb3B0aW9uczpcbiAgIyAgICAgICogYGNsYXNzTmFtZWAgKG9wdGlvbmFsKSB7U3RyaW5nfSBhIGNsYXNzIG5hbWUgdG8gYWRkIHRvIHRoZSBidXR0b24nc1xuICAjICAgICAgICBkZWZhdWx0IGNsYXNzIG5hbWUgKGBidG4gYnRuLWluZm9gKS5cbiAgIyAgICAgICogYG9uRGlkQ2xpY2tgIChvcHRpb25hbCkge0Z1bmN0aW9ufSBjYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlIGJ1dHRvblxuICAjICAgICAgICBoYXMgYmVlbiBjbGlja2VkLiBUaGUgY29udGV4dCB3aWxsIGJlIHNldCB0byB0aGVcbiAgIyAgICAgICAge05vdGlmaWNhdGlvbkVsZW1lbnR9IGluc3RhbmNlLlxuICAjICAgICAgKiBgdGV4dGAge1N0cmluZ30gaW5uZXIgdGV4dCBmb3IgdGhlIGJ1dHRvblxuICAjICAgICogYGRlc2NyaXB0aW9uYCAob3B0aW9uYWwpIEEgTWFya2Rvd24ge1N0cmluZ30gY29udGFpbmluZyBhIGxvbmdlclxuICAjICAgICAgZGVzY3JpcHRpb24gYWJvdXQgdGhlIG5vdGlmaWNhdGlvbi4gQnkgZGVmYXVsdCwgdGhpcyAqKndpbGwgbm90KipcbiAgIyAgICAgIHByZXNlcnZlIG5ld2xpbmVzIGFuZCB3aGl0ZXNwYWNlIHdoZW4gaXQgaXMgcmVuZGVyZWQuXG4gICMgICAgKiBgZGV0YWlsYCAob3B0aW9uYWwpIEEgcGxhaW4tdGV4dCB7U3RyaW5nfSBjb250YWluaW5nIGFkZGl0aW9uYWwgZGV0YWlsc1xuICAjICAgICAgYWJvdXQgdGhlIG5vdGlmaWNhdGlvbi4gQnkgZGVmYXVsdCwgdGhpcyAqKndpbGwqKiBwcmVzZXJ2ZSBuZXdsaW5lc1xuICAjICAgICAgYW5kIHdoaXRlc3BhY2Ugd2hlbiBpdCBpcyByZW5kZXJlZC5cbiAgIyAgICAqIGBkaXNtaXNzYWJsZWAgKG9wdGlvbmFsKSBBIHtCb29sZWFufSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpc1xuICAjICAgICAgbm90aWZpY2F0aW9uIGNhbiBiZSBkaXNtaXNzZWQgYnkgdGhlIHVzZXIuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICMgICAgKiBgaWNvbmAgKG9wdGlvbmFsKSBBIHtTdHJpbmd9IG5hbWUgb2YgYW4gaWNvbiBmcm9tIE9jdGljb25zIHRvIGRpc3BsYXlcbiAgIyAgICAgIGluIHRoZSBub3RpZmljYXRpb24gaGVhZGVyLiBEZWZhdWx0cyB0byBgJ2luZm8nYC5cbiAgYWRkSW5mbzogKG1lc3NhZ2UsIG9wdGlvbnMpIC0+XG4gICAgQGFkZE5vdGlmaWNhdGlvbihuZXcgTm90aWZpY2F0aW9uKCdpbmZvJywgbWVzc2FnZSwgb3B0aW9ucykpXG5cbiAgIyBQdWJsaWM6IEFkZCBhIHdhcm5pbmcgbm90aWZpY2F0aW9uLlxuICAjXG4gICMgKiBgbWVzc2FnZWAgQSB7U3RyaW5nfSBtZXNzYWdlXG4gICMgKiBgb3B0aW9uc2AgKG9wdGlvbmFsKSBBbiBvcHRpb25zIHtPYmplY3R9IHdpdGggdGhlIGZvbGxvd2luZyBrZXlzOlxuICAjICAgICogYGJ1dHRvbnNgIChvcHRpb25hbCkgQW4ge0FycmF5fSBvZiB7T2JqZWN0fSB3aGVyZSBlYWNoIHtPYmplY3R9IGhhcyB0aGVcbiAgIyAgICAgIGZvbGxvd2luZyBvcHRpb25zOlxuICAjICAgICAgKiBgY2xhc3NOYW1lYCAob3B0aW9uYWwpIHtTdHJpbmd9IGEgY2xhc3MgbmFtZSB0byBhZGQgdG8gdGhlIGJ1dHRvbidzXG4gICMgICAgICAgIGRlZmF1bHQgY2xhc3MgbmFtZSAoYGJ0biBidG4td2FybmluZ2ApLlxuICAjICAgICAgKiBgb25EaWRDbGlja2AgKG9wdGlvbmFsKSB7RnVuY3Rpb259IGNhbGxiYWNrIHRvIGNhbGwgd2hlbiB0aGUgYnV0dG9uXG4gICMgICAgICAgIGhhcyBiZWVuIGNsaWNrZWQuIFRoZSBjb250ZXh0IHdpbGwgYmUgc2V0IHRvIHRoZVxuICAjICAgICAgICB7Tm90aWZpY2F0aW9uRWxlbWVudH0gaW5zdGFuY2UuXG4gICMgICAgICAqIGB0ZXh0YCB7U3RyaW5nfSBpbm5lciB0ZXh0IGZvciB0aGUgYnV0dG9uXG4gICMgICAgKiBgZGVzY3JpcHRpb25gIChvcHRpb25hbCkgQSBNYXJrZG93biB7U3RyaW5nfSBjb250YWluaW5nIGEgbG9uZ2VyXG4gICMgICAgICBkZXNjcmlwdGlvbiBhYm91dCB0aGUgbm90aWZpY2F0aW9uLiBCeSBkZWZhdWx0LCB0aGlzICoqd2lsbCBub3QqKlxuICAjICAgICAgcHJlc2VydmUgbmV3bGluZXMgYW5kIHdoaXRlc3BhY2Ugd2hlbiBpdCBpcyByZW5kZXJlZC5cbiAgIyAgICAqIGBkZXRhaWxgIChvcHRpb25hbCkgQSBwbGFpbi10ZXh0IHtTdHJpbmd9IGNvbnRhaW5pbmcgYWRkaXRpb25hbCBkZXRhaWxzXG4gICMgICAgICBhYm91dCB0aGUgbm90aWZpY2F0aW9uLiBCeSBkZWZhdWx0LCB0aGlzICoqd2lsbCoqIHByZXNlcnZlIG5ld2xpbmVzXG4gICMgICAgICBhbmQgd2hpdGVzcGFjZSB3aGVuIGl0IGlzIHJlbmRlcmVkLlxuICAjICAgICogYGRpc21pc3NhYmxlYCAob3B0aW9uYWwpIEEge0Jvb2xlYW59IGluZGljYXRpbmcgd2hldGhlciB0aGlzXG4gICMgICAgICBub3RpZmljYXRpb24gY2FuIGJlIGRpc21pc3NlZCBieSB0aGUgdXNlci4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgIyAgICAqIGBpY29uYCAob3B0aW9uYWwpIEEge1N0cmluZ30gbmFtZSBvZiBhbiBpY29uIGZyb20gT2N0aWNvbnMgdG8gZGlzcGxheVxuICAjICAgICAgaW4gdGhlIG5vdGlmaWNhdGlvbiBoZWFkZXIuIERlZmF1bHRzIHRvIGAnYWxlcnQnYC5cbiAgYWRkV2FybmluZzogKG1lc3NhZ2UsIG9wdGlvbnMpIC0+XG4gICAgQGFkZE5vdGlmaWNhdGlvbihuZXcgTm90aWZpY2F0aW9uKCd3YXJuaW5nJywgbWVzc2FnZSwgb3B0aW9ucykpXG5cbiAgIyBQdWJsaWM6IEFkZCBhbiBlcnJvciBub3RpZmljYXRpb24uXG4gICNcbiAgIyAqIGBtZXNzYWdlYCBBIHtTdHJpbmd9IG1lc3NhZ2VcbiAgIyAqIGBvcHRpb25zYCAob3B0aW9uYWwpIEFuIG9wdGlvbnMge09iamVjdH0gd2l0aCB0aGUgZm9sbG93aW5nIGtleXM6XG4gICMgICAgKiBgYnV0dG9uc2AgKG9wdGlvbmFsKSBBbiB7QXJyYXl9IG9mIHtPYmplY3R9IHdoZXJlIGVhY2gge09iamVjdH0gaGFzIHRoZVxuICAjICAgICAgZm9sbG93aW5nIG9wdGlvbnM6XG4gICMgICAgICAqIGBjbGFzc05hbWVgIChvcHRpb25hbCkge1N0cmluZ30gYSBjbGFzcyBuYW1lIHRvIGFkZCB0byB0aGUgYnV0dG9uJ3NcbiAgIyAgICAgICAgZGVmYXVsdCBjbGFzcyBuYW1lIChgYnRuIGJ0bi1lcnJvcmApLlxuICAjICAgICAgKiBgb25EaWRDbGlja2AgKG9wdGlvbmFsKSB7RnVuY3Rpb259IGNhbGxiYWNrIHRvIGNhbGwgd2hlbiB0aGUgYnV0dG9uXG4gICMgICAgICAgIGhhcyBiZWVuIGNsaWNrZWQuIFRoZSBjb250ZXh0IHdpbGwgYmUgc2V0IHRvIHRoZVxuICAjICAgICAgICB7Tm90aWZpY2F0aW9uRWxlbWVudH0gaW5zdGFuY2UuXG4gICMgICAgICAqIGB0ZXh0YCB7U3RyaW5nfSBpbm5lciB0ZXh0IGZvciB0aGUgYnV0dG9uXG4gICMgICAgKiBgZGVzY3JpcHRpb25gIChvcHRpb25hbCkgQSBNYXJrZG93biB7U3RyaW5nfSBjb250YWluaW5nIGEgbG9uZ2VyXG4gICMgICAgICBkZXNjcmlwdGlvbiBhYm91dCB0aGUgbm90aWZpY2F0aW9uLiBCeSBkZWZhdWx0LCB0aGlzICoqd2lsbCBub3QqKlxuICAjICAgICAgcHJlc2VydmUgbmV3bGluZXMgYW5kIHdoaXRlc3BhY2Ugd2hlbiBpdCBpcyByZW5kZXJlZC5cbiAgIyAgICAqIGBkZXRhaWxgIChvcHRpb25hbCkgQSBwbGFpbi10ZXh0IHtTdHJpbmd9IGNvbnRhaW5pbmcgYWRkaXRpb25hbCBkZXRhaWxzXG4gICMgICAgICBhYm91dCB0aGUgbm90aWZpY2F0aW9uLiBCeSBkZWZhdWx0LCB0aGlzICoqd2lsbCoqIHByZXNlcnZlIG5ld2xpbmVzXG4gICMgICAgICBhbmQgd2hpdGVzcGFjZSB3aGVuIGl0IGlzIHJlbmRlcmVkLlxuICAjICAgICogYGRpc21pc3NhYmxlYCAob3B0aW9uYWwpIEEge0Jvb2xlYW59IGluZGljYXRpbmcgd2hldGhlciB0aGlzXG4gICMgICAgICBub3RpZmljYXRpb24gY2FuIGJlIGRpc21pc3NlZCBieSB0aGUgdXNlci4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgIyAgICAqIGBpY29uYCAob3B0aW9uYWwpIEEge1N0cmluZ30gbmFtZSBvZiBhbiBpY29uIGZyb20gT2N0aWNvbnMgdG8gZGlzcGxheVxuICAjICAgICAgaW4gdGhlIG5vdGlmaWNhdGlvbiBoZWFkZXIuIERlZmF1bHRzIHRvIGAnZmxhbWUnYC5cbiAgIyAgICAqIGBzdGFja2AgKG9wdGlvbmFsKSBBIHByZWZvcm1hdHRlZCB7U3RyaW5nfSB3aXRoIHN0YWNrIHRyYWNlIGluZm9ybWF0aW9uXG4gICMgICAgICBkZXNjcmliaW5nIHRoZSBsb2NhdGlvbiBvZiB0aGUgZXJyb3IuXG4gIGFkZEVycm9yOiAobWVzc2FnZSwgb3B0aW9ucykgLT5cbiAgICBAYWRkTm90aWZpY2F0aW9uKG5ldyBOb3RpZmljYXRpb24oJ2Vycm9yJywgbWVzc2FnZSwgb3B0aW9ucykpXG5cbiAgIyBQdWJsaWM6IEFkZCBhIGZhdGFsIGVycm9yIG5vdGlmaWNhdGlvbi5cbiAgI1xuICAjICogYG1lc3NhZ2VgIEEge1N0cmluZ30gbWVzc2FnZVxuICAjICogYG9wdGlvbnNgIChvcHRpb25hbCkgQW4gb3B0aW9ucyB7T2JqZWN0fSB3aXRoIHRoZSBmb2xsb3dpbmcga2V5czpcbiAgIyAgICAqIGBidXR0b25zYCAob3B0aW9uYWwpIEFuIHtBcnJheX0gb2Yge09iamVjdH0gd2hlcmUgZWFjaCB7T2JqZWN0fSBoYXMgdGhlXG4gICMgICAgICBmb2xsb3dpbmcgb3B0aW9uczpcbiAgIyAgICAgICogYGNsYXNzTmFtZWAgKG9wdGlvbmFsKSB7U3RyaW5nfSBhIGNsYXNzIG5hbWUgdG8gYWRkIHRvIHRoZSBidXR0b24nc1xuICAjICAgICAgICBkZWZhdWx0IGNsYXNzIG5hbWUgKGBidG4gYnRuLWVycm9yYCkuXG4gICMgICAgICAqIGBvbkRpZENsaWNrYCAob3B0aW9uYWwpIHtGdW5jdGlvbn0gY2FsbGJhY2sgdG8gY2FsbCB3aGVuIHRoZSBidXR0b25cbiAgIyAgICAgICAgaGFzIGJlZW4gY2xpY2tlZC4gVGhlIGNvbnRleHQgd2lsbCBiZSBzZXQgdG8gdGhlXG4gICMgICAgICAgIHtOb3RpZmljYXRpb25FbGVtZW50fSBpbnN0YW5jZS5cbiAgIyAgICAgICogYHRleHRgIHtTdHJpbmd9IGlubmVyIHRleHQgZm9yIHRoZSBidXR0b25cbiAgIyAgICAqIGBkZXNjcmlwdGlvbmAgKG9wdGlvbmFsKSBBIE1hcmtkb3duIHtTdHJpbmd9IGNvbnRhaW5pbmcgYSBsb25nZXJcbiAgIyAgICAgIGRlc2NyaXB0aW9uIGFib3V0IHRoZSBub3RpZmljYXRpb24uIEJ5IGRlZmF1bHQsIHRoaXMgKip3aWxsIG5vdCoqXG4gICMgICAgICBwcmVzZXJ2ZSBuZXdsaW5lcyBhbmQgd2hpdGVzcGFjZSB3aGVuIGl0IGlzIHJlbmRlcmVkLlxuICAjICAgICogYGRldGFpbGAgKG9wdGlvbmFsKSBBIHBsYWluLXRleHQge1N0cmluZ30gY29udGFpbmluZyBhZGRpdGlvbmFsIGRldGFpbHNcbiAgIyAgICAgIGFib3V0IHRoZSBub3RpZmljYXRpb24uIEJ5IGRlZmF1bHQsIHRoaXMgKip3aWxsKiogcHJlc2VydmUgbmV3bGluZXNcbiAgIyAgICAgIGFuZCB3aGl0ZXNwYWNlIHdoZW4gaXQgaXMgcmVuZGVyZWQuXG4gICMgICAgKiBgZGlzbWlzc2FibGVgIChvcHRpb25hbCkgQSB7Qm9vbGVhbn0gaW5kaWNhdGluZyB3aGV0aGVyIHRoaXNcbiAgIyAgICAgIG5vdGlmaWNhdGlvbiBjYW4gYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAjICAgICogYGljb25gIChvcHRpb25hbCkgQSB7U3RyaW5nfSBuYW1lIG9mIGFuIGljb24gZnJvbSBPY3RpY29ucyB0byBkaXNwbGF5XG4gICMgICAgICBpbiB0aGUgbm90aWZpY2F0aW9uIGhlYWRlci4gRGVmYXVsdHMgdG8gYCdidWcnYC5cbiAgIyAgICAqIGBzdGFja2AgKG9wdGlvbmFsKSBBIHByZWZvcm1hdHRlZCB7U3RyaW5nfSB3aXRoIHN0YWNrIHRyYWNlIGluZm9ybWF0aW9uXG4gICMgICAgICBkZXNjcmliaW5nIHRoZSBsb2NhdGlvbiBvZiB0aGUgZXJyb3IuXG4gIGFkZEZhdGFsRXJyb3I6IChtZXNzYWdlLCBvcHRpb25zKSAtPlxuICAgIEBhZGROb3RpZmljYXRpb24obmV3IE5vdGlmaWNhdGlvbignZmF0YWwnLCBtZXNzYWdlLCBvcHRpb25zKSlcblxuICBhZGQ6ICh0eXBlLCBtZXNzYWdlLCBvcHRpb25zKSAtPlxuICAgIEBhZGROb3RpZmljYXRpb24obmV3IE5vdGlmaWNhdGlvbih0eXBlLCBtZXNzYWdlLCBvcHRpb25zKSlcblxuICBhZGROb3RpZmljYXRpb246IChub3RpZmljYXRpb24pIC0+XG4gICAgQG5vdGlmaWNhdGlvbnMucHVzaChub3RpZmljYXRpb24pXG4gICAgQGVtaXR0ZXIuZW1pdCgnZGlkLWFkZC1ub3RpZmljYXRpb24nLCBub3RpZmljYXRpb24pXG4gICAgbm90aWZpY2F0aW9uXG5cbiAgIyMjXG4gIFNlY3Rpb246IEdldHRpbmcgTm90aWZpY2F0aW9uc1xuICAjIyNcblxuICAjIFB1YmxpYzogR2V0IGFsbCB0aGUgbm90aWZpY2F0aW9ucy5cbiAgI1xuICAjIFJldHVybnMgYW4ge0FycmF5fSBvZiB7Tm90aWZpY2F0aW9ufXMuXG4gIGdldE5vdGlmaWNhdGlvbnM6IC0+IEBub3RpZmljYXRpb25zLnNsaWNlKClcblxuICAjIyNcbiAgU2VjdGlvbjogTWFuYWdpbmcgTm90aWZpY2F0aW9uc1xuICAjIyNcblxuICBjbGVhcjogLT5cbiAgICBAbm90aWZpY2F0aW9ucyA9IFtdXG4iXX0=
