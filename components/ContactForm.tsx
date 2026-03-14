'use client';

import { useState } from 'react';

export function ContactForm() {
  const [name, setName]         = useState('');
  const [phone, setPhone]       = useState('');
  const [technique, setTechnique] = useState('');
  const [message, setMessage]   = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts: string[] = ['Olá, Vanuza!'];
    if (name)      parts.push(`Me chamo *${name}*`);
    if (phone)     parts.push(`Telefone: ${phone}`);
    if (technique) parts.push(`Tenho interesse em: *${technique}*`);
    if (message)   parts.push(`\n${message}`);
    parts.push('\nGostaria de mais informações!');

    const url = `https://wa.me/5531992560137?text=${encodeURIComponent(parts.join('\n'))}`;
    window.open(url, '_blank');
  };

  const field: React.CSSProperties = {
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '12px',
    color: '#fff',
    padding: '12px 16px',
    width: '100%',
    fontSize: '14px',
    outline: 'none',
    colorScheme: 'dark',
    WebkitAppearance: 'none',
    appearance: 'none',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold uppercase tracking-wide mb-1.5 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Seu nome *
          </label>
          <input
            type="text"
            placeholder="Como te chamamos?"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={field}
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wide mb-1.5 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Telefone
          </label>
          <input
            type="tel"
            placeholder="(31) 9 0000-0000"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={field}
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-wide mb-1.5 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Serviço de interesse
        </label>
        <select
          value={technique}
          onChange={e => setTechnique(e.target.value)}
          style={{ ...field, cursor: 'pointer' }}
        >
          <option value="" style={{ background: '#1a0f14' }}>Selecione uma opção</option>
          <option value="Microlink" style={{ background: '#1a0f14' }}>Microlink</option>
          <option value="Fita Adesiva" style={{ background: '#1a0f14' }}>Fita Adesiva</option>
          <option value="Ponto Americano" style={{ background: '#1a0f14' }}>Ponto Americano</option>
          <option value="Manutenção" style={{ background: '#1a0f14' }}>Manutenção</option>
          <option value="Curso" style={{ background: '#1a0f14' }}>Curso</option>
          <option value="Dúvidas gerais" style={{ background: '#1a0f14' }}>Dúvidas gerais</option>
        </select>
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-wide mb-1.5 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Mensagem
        </label>
        <textarea
          placeholder="Conte um pouco sobre o que você procura..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={4}
          style={{ ...field, resize: 'none' }}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl font-bold text-sm text-white transition-all hover:scale-[1.03]"
        style={{ background: 'linear-gradient(135deg, #715B4B 0%, #CFA07A 50%, #E5C4A1 100%)' }}
      >
        Enviar pelo WhatsApp
      </button>

      <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
        Você será redirecionada ao WhatsApp com a mensagem pronta.
      </p>
    </form>
  );
}
