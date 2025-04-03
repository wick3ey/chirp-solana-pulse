
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Image, Link, Smile, Video, Paperclip, Globe, Lock, Users, Sparkles, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TweetCreate: React.FC = () => {
  const [content, setContent] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibility, setVisibility] = useState<'public' | 'friends' | 'private'>('public');
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const maxCharCount = 280;

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    if (newContent.length <= maxCharCount) {
      setContent(newContent);
      setCharCount(newContent.length);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result as string);
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }, 1000);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      toast({
        title: "Post created!",
        description: "Your post has been shared with the community.",
      });
      setContent('');
      setCharCount(0);
      setSelectedImage(null);
    }
  };
  
  const visibilityOptions = [
    { id: 'public', icon: Globe, label: 'Public' },
    { id: 'friends', icon: Users, label: 'Friends' },
    { id: 'private', icon: Lock, label: 'Private' },
  ];

  return (
    <div className="card-gradient rounded-xl p-4 mb-4 animate-entrance">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-solana-purple">
            <img
              src="https://avatars.githubusercontent.com/u/35243667?v=4" // placeholder avatar
              alt="Your avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <textarea
              className="w-full bg-transparent border-none outline-none resize-none placeholder:text-foreground/50 min-h-[80px] text-lg"
              placeholder="What's happening in Solana?"
              value={content}
              onChange={handleContentChange}
            />
            
            {selectedImage && (
              <div className="relative mt-2 mb-3">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={selectedImage} 
                    alt="Uploaded" 
                    className="max-h-64 w-full object-cover rounded-lg"
                  />
                </div>
                <Button 
                  type="button" 
                  variant="secondary" 
                  size="icon" 
                  className="absolute top-2 right-2 bg-background/60 backdrop-blur-md hover:bg-background/80"
                  onClick={removeImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            
            {isUploading && (
              <div className="h-12 w-full bg-muted/30 rounded-lg flex items-center justify-center animate-pulse-bg my-2">
                <span className="text-sm">Uploading...</span>
              </div>
            )}

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <div className="flex items-center gap-1">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="image-upload"
                  onChange={handleImageUpload}
                />
                <label htmlFor="image-upload">
                  <Button type="button" variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                    <Image className="h-5 w-5" />
                  </Button>
                </label>
                <Button type="button" variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                  <Video className="h-5 w-5" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                  <Link className="h-5 w-5" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                  <Paperclip className="h-5 w-5" />
                </Button>
                
                <div className="border-r border-border h-5 mx-1"></div>
                
                <div className="relative group">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:bg-primary/10 rounded-full flex items-center gap-1 h-8"
                  >
                    {visibility === 'public' && <Globe className="h-4 w-4" />}
                    {visibility === 'friends' && <Users className="h-4 w-4" />}
                    {visibility === 'private' && <Lock className="h-4 w-4" />}
                    <span className="text-xs">{visibilityOptions.find(opt => opt.id === visibility)?.label}</span>
                  </Button>
                  
                  <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    {visibilityOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        className={`flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-white/5 ${visibility === option.id ? 'bg-white/10' : ''}`}
                        onClick={() => setVisibility(option.id as 'public' | 'friends' | 'private')}
                      >
                        <option.icon className="h-4 w-4" />
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className={`text-xs ${charCount > maxCharCount * 0.8 ? 'text-orange-500' : ''} ${charCount > maxCharCount * 0.95 ? 'text-red-500' : ''}`}>
                  {charCount}/{maxCharCount}
                </div>
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-solana-purple to-solana-blue hover:opacity-90 text-white button-hover-glow"
                  disabled={content.trim() === '' || charCount > maxCharCount}
                >
                  <Sparkles className="mr-1 h-4 w-4" /> Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetCreate;
