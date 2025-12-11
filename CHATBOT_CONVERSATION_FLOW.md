# Chatbot Conversation Flow System

## 🎯 Overview

The chatbot now implements a **conversation stage system** that tracks and manages the flow of customer interactions from start to completion.

---

## 📊 Conversation Stages

### 1. **GREETING** (Initial Stage)
- **Starts:** When chatbot opens or conversation resets
- **Purpose:** Welcome user and set context
- **Response:** Initial greeting message
- **Progresses to:** INQUIRY (after user asks first question)

### 2. **INQUIRY** (Active Question Stage)
- **Starts:** When user asks a question
- **Purpose:** Answer user's question
- **Response:** Provides answer based on keywords/rules
- **Progresses to:** FOLLOW_UP (when question is answered)

### 3. **FOLLOW_UP** (Engagement Stage)
- **Starts:** After question is answered
- **Purpose:** Check if user needs more help
- **Response:** Answer + "Is there anything else I can help you with?"
- **Progresses to:**
  - INQUIRY (if user asks new question)
  - CLOSING (if user says "no" or "that's all")
  - MENU (if user types "menu")

### 4. **CLOSING** (End Stage)
- **Starts:** When user indicates they're done
- **Purpose:** Provide closing message and contact info
- **Response:** Thank you message + contact details
- **Progresses to:** GREETING (resets for new conversation)

### 5. **MENU** (Navigation Stage)
- **Starts:** When user types "menu" or "main menu"
- **Purpose:** Show available options
- **Response:** List of topics and quick options
- **Progresses to:** INQUIRY (when user selects a topic)

---

## 🔄 Conversation Flow Cycle

```
GREETING → INQUIRY → FOLLOW_UP → [INQUIRY | CLOSING | MENU]
                ↑                    ↓
                └────────────────────┘
```

### Example Flow:

1. **User opens chatbot** → GREETING
   - Bot: "Hello! How can I assist you?"

2. **User asks question** → INQUIRY
   - User: "What are your prices?"
   - Bot: "Our pricing varies based on volume..."

3. **Question answered** → FOLLOW_UP
   - Bot: "...Is there anything else I can help you with?"

4. **User asks another question** → INQUIRY (cycle continues)
   - User: "Tell me about your products"
   - Bot: "We supply certified devices..."

5. **User says done** → CLOSING
   - User: "No, that's all"
   - Bot: "Thank you! Contact us at..."

6. **New conversation** → GREETING (cycle resets)

---

## 🎯 Key Features

### Question Completion Detection
The system detects when a question is fully answered:
- ✅ Response is substantial (>100 chars)
- ✅ User acknowledges (says "thanks", "ok", etc.)
- ✅ User asks new question (indicates previous was answered)

### Navigation Options
Users can:
- Type **"menu"** → See main menu
- Type **"start over"** → Reset conversation
- Type **"contact"** → Get contact information
- Say **"no"** or **"that's all"** → Close conversation

### State Persistence
- Each conversation has a unique `sessionId`
- Conversation state is maintained across messages
- Topics discussed are tracked
- Message count is tracked

---

## 💡 How It Works

### Stage Detection Logic

```typescript
// System automatically detects:
1. Is question complete? → Move to FOLLOW_UP
2. User wants menu? → Move to MENU
3. User is done? → Move to CLOSING
4. New question? → Move to INQUIRY
```

### Response Formatting

Each stage adds appropriate context:
- **FOLLOW_UP:** Adds "Is there anything else?" prompt
- **CLOSING:** Adds contact information
- **MENU:** Shows available options

---

## 🔧 Implementation Details

### Files:
- `lib/chatbot/conversationState.ts` - State management
- `lib/chatbot/intelligentResponse.ts` - Response logic with stages
- `app/api/chat/route.ts` - API with session management
- `components/Chatbot/Chatbot.tsx` - UI with reset functionality

### Session Management:
- In-memory storage (for production, consider Redis)
- Each session tracks:
  - Current stage
  - Topics discussed
  - Message count
  - Last response

---

## 📝 User Experience

### Typical Conversation:

**User:** *Opens chatbot*
**Bot:** "Hello! How can I assist you?" [GREETING]

**User:** "What are your prices?"
**Bot:** "Our pricing varies... [answer]" [INQUIRY → FOLLOW_UP]
**Bot:** "Is there anything else I can help you with?"

**User:** "Tell me about your products"
**Bot:** "We supply certified devices... [answer]" [INQUIRY → FOLLOW_UP]
**Bot:** "Is there anything else I can help you with?"

**User:** "No, that's all"
**Bot:** "Thank you! Contact us at..." [CLOSING]

---

## 🎨 UI Features

### Reset Button
- Added to chatbot header
- Resets conversation to GREETING stage
- Clears message history
- Shows quick actions again

### Quick Actions
- Shown at start (GREETING stage)
- Hidden after first interaction
- Reappears on reset

---

## ✅ Benefits

1. **Natural Flow:** Conversations feel more natural
2. **Clear Completion:** Users know when question is answered
3. **Easy Navigation:** Users can return to menu anytime
4. **Proper Closure:** Conversations end gracefully
5. **State Tracking:** System remembers context

---

## 🚀 Future Enhancements

Possible additions:
- Analytics dashboard (track stage transitions)
- A/B testing (different follow-up prompts)
- Multi-turn conversations (remember previous topics)
- Sentiment analysis (detect satisfaction)
- Escalation triggers (route to human when needed)

---

## 📊 Stage Transition Matrix

| Current Stage | User Action | Next Stage |
|--------------|------------|------------|
| GREETING | Asks question | INQUIRY |
| INQUIRY | Question answered | FOLLOW_UP |
| FOLLOW_UP | Asks new question | INQUIRY |
| FOLLOW_UP | Says "no"/"done" | CLOSING |
| FOLLOW_UP | Types "menu" | MENU |
| MENU | Selects topic | INQUIRY |
| CLOSING | New conversation | GREETING |
| Any | Types "reset" | GREETING |

---

The conversation flow system is now fully implemented and ready to use! 🎉

