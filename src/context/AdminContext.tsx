'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CommitteeMember,
  Academy,
  Achievement,
  EventItem,
  NewsItem,
  DocumentItem,
  FaqItem,
  initialCommittee,
  initialAcademies,
  initialAchievements,
  initialEvents,
  initialNews,
  initialDocuments,
  initialFaqs
} from '@/data/kudoData';

interface AdminContextType {
  committee: CommitteeMember[];
  academies: Academy[];
  achievements: Achievement[];
  events: EventItem[];
  news: NewsItem[];
  documents: DocumentItem[];
  faqs: FaqItem[];
  isAdminLoggedIn: boolean;
  loginAdmin: (pass: string) => boolean;
  logoutAdmin: () => void;
  addNews: (item: Omit<NewsItem, 'id'>) => void;
  deleteNews: (id: string) => void;
  addEvent: (item: Omit<EventItem, 'id'>) => void;
  deleteEvent: (id: string) => void;
  addAcademy: (item: Omit<Academy, 'id'>) => void;
  deleteAcademy: (id: string) => void;
  addDocument: (item: Omit<DocumentItem, 'id'>) => void;
  deleteDocument: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [committee, setCommittee] = useState<CommitteeMember[]>(initialCommittee);
  const [academies, setAcademies] = useState<Academy[]>(initialAcademies);
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);
  const [events, setEvents] = useState<EventItem[]>(initialEvents);
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [documents, setDocuments] = useState<DocumentItem[]>(initialDocuments);
  const [faqs, setFaqs] = useState<FaqItem[]>(initialFaqs);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Load persisted state if exists
    const storedNews = localStorage.getItem('tnska_news');
    if (storedNews) setNews(JSON.parse(storedNews));

    const storedEvents = localStorage.getItem('tnska_events');
    if (storedEvents) setEvents(JSON.parse(storedEvents));

    const storedAcademies = localStorage.getItem('tnska_academies');
    if (storedAcademies) setAcademies(JSON.parse(storedAcademies));

    const storedDocs = localStorage.getItem('tnska_docs');
    if (storedDocs) setDocuments(JSON.parse(storedDocs));

    const storedAuth = localStorage.getItem('tnska_admin_auth');
    if (storedAuth === 'true') setIsAdminLoggedIn(true);
  }, []);

  const loginAdmin = (pass: string) => {
    // Simple admin authentication passcode for local admin CMS
    if (pass === 'kudo2026' || pass === 'admin') {
      setIsAdminLoggedIn(true);
      localStorage.setItem('tnska_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('tnska_admin_auth');
  };

  const addNews = (item: Omit<NewsItem, 'id'>) => {
    const newItem: NewsItem = { ...item, id: `news-${Date.now()}` };
    const updated = [newItem, ...news];
    setNews(updated);
    localStorage.setItem('tnska_news', JSON.stringify(updated));
  };

  const deleteNews = (id: string) => {
    const updated = news.filter(n => n.id !== id);
    setNews(updated);
    localStorage.setItem('tnska_news', JSON.stringify(updated));
  };

  const addEvent = (item: Omit<EventItem, 'id'>) => {
    const newItem: EventItem = { ...item, id: `ev-${Date.now()}` };
    const updated = [newItem, ...events];
    setEvents(updated);
    localStorage.setItem('tnska_events', JSON.stringify(updated));
  };

  const deleteEvent = (id: string) => {
    const updated = events.filter(e => e.id !== id);
    setEvents(updated);
    localStorage.setItem('tnska_events', JSON.stringify(updated));
  };

  const addAcademy = (item: Omit<Academy, 'id'>) => {
    const newItem: Academy = { ...item, id: `ac-${Date.now()}` };
    const updated = [...academies, newItem];
    setAcademies(updated);
    localStorage.setItem('tnska_academies', JSON.stringify(updated));
  };

  const deleteAcademy = (id: string) => {
    const updated = academies.filter(a => a.id !== id);
    setAcademies(updated);
    localStorage.setItem('tnska_academies', JSON.stringify(updated));
  };

  const addDocument = (item: Omit<DocumentItem, 'id'>) => {
    const newItem: DocumentItem = { ...item, id: `doc-${Date.now()}` };
    const updated = [newItem, ...documents];
    setDocuments(updated);
    localStorage.setItem('tnska_docs', JSON.stringify(updated));
  };

  const deleteDocument = (id: string) => {
    const updated = documents.filter(d => d.id !== id);
    setDocuments(updated);
    localStorage.setItem('tnska_docs', JSON.stringify(updated));
  };

  return (
    <AdminContext.Provider
      value={{
        committee,
        academies,
        achievements,
        events,
        news,
        documents,
        faqs,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        addNews,
        deleteNews,
        addEvent,
        deleteEvent,
        addAcademy,
        deleteAcademy,
        addDocument,
        deleteDocument
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
